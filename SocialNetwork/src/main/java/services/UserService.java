package services;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import beans.Comment;
import beans.Friend;
import beans.FriendRequest;
import beans.Image;
import beans.Post;
import beans.User;
import dao.UserDAO;
import enums.Gender;
import enums.UserType;

@Path("/user")
public class UserService {
	
	@Context
	ServletContext ctx;
	
	public UserService() {}
	
	@PostConstruct
	public void init() {
		if (ctx.getAttribute("userDAO") == null) {
	    	String contextPath = ctx.getRealPath("/data/users.json");
			ctx.setAttribute("userDAO", new UserDAO(contextPath));
		}
	}
	
	@GET
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<User> getAllUsers() {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		return userDao.findAll();
	}
	
	@POST
	@Path("/register")
	@Consumes(MediaType.APPLICATION_JSON)
	//@Produces(MediaType.APPLICATION_JSON)
	public Response register(HashMap<String, String> values) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		User userExists = userDao.getByUsername(values.get("username"));
		if (userExists != null) {
			return Response.status(400).entity("User already exists").build();
		}
		Image defaultImage = new Image("", false);
		User newuser = new User(values.get("username"), values.get("password"), values.get("email"), values.get("name"), values.get("lastName"), values.get("dateOfBirth"), Gender.valueOf(values.get("gender")), UserType.REGULAR_USER, defaultImage, false);
		userDao.addUser(newuser);
		ctx.setAttribute("loggedUser", newuser);
		return Response.status(200).build();
	}
	
	@GET
	@Path("{username}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public User getUserByUsername(@PathParam("username") String username) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		return userDao.getByUsername(username);
	}
	
	@POST
	@Path("/edit")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response editUserProfile(HashMap<String, String> values) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		User userToEdit = userDao.getByUsername(values.get("username"));
		userDao.editUser(userToEdit, values);
		return Response.status(200).build();
	}
	
	@GET
	@Path("/images/{username}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<Image> getUserImages(@PathParam("username") String username) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		User user = userDao.getByUsername(username);
		List<Image> userActiveImages = userDao.getActiveImages(user);
		return userActiveImages;
	}
	
	@GET
	@Path("/post/{username}/{imageId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Post getPostData(@PathParam("username") String username, @PathParam("imageId") String imageId) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		User user = userDao.getByUsername(username);
		Post post = userDao.getPostByPicture(user, imageId);
		return post;
	}
	
	@DELETE
	@Path("/delete-post/{username}/{imageId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response deletePost(@PathParam("username") String username, @PathParam("imageId") String imageId) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		User user = userDao.getByUsername(username);
		Post post = userDao.getPostByPicture(user, imageId);
		userDao.deletePost(user, post);
		userDao.deleteImage(user, imageId);
		return Response.status(200).build();
	}
	
	@GET
	@Path("/friends/{username}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getUserFriends(@PathParam("username") String username) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		User user = userDao.getByUsername(username);
		
		List<Friend> activeFriends = userDao.getUserFriends(user);
		
		List<User> activeFriendsToUsers = new ArrayList<User>();
		
		for(Friend friend : activeFriends)
		{
			activeFriendsToUsers.add(userDao.getByUsername(friend.getUsername()));
		}
		
		return activeFriendsToUsers;
	}
	
	@GET
	@Path("/friend-requests/{username}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getFriendRequests(@PathParam("username") String username) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		
		User user = userDao.getByUsername(username);
		List<FriendRequest> pendingFriendRequests = userDao.getFriendRequests(user);
		
		List<User> activeFriendRequestsToUsers = new ArrayList<User>();
		
		for(FriendRequest friendRequest : pendingFriendRequests)
		{
			activeFriendRequestsToUsers.add(userDao.getByUsername(friendRequest.getSender()));
		}
		
		return activeFriendRequestsToUsers;
	}
	
	@POST
	@Path("/change-request-status/{username}/{sender}/{statusType}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response changeRequestStatus(@PathParam("username") String username, @PathParam("sender") String sender, @PathParam("statusType") String statusType) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		User user = userDao.getByUsername(username);
		userDao.changeRequestStatus(user, sender, statusType);
		if(statusType.equals("accept"))
		{
			userDao.makeNewFriend(user, sender);//person'side
			
			User friend = userDao.getByUsername(sender);
			
			userDao.makeNewFriend(friend, username);
		}
		
		return Response.status(200).build();
	}
	
	@DELETE
	@Path("/remove-friend/{username}/{friendUsername}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response removeFriend(@PathParam("username") String username, @PathParam("friendUsername") String friendUsername) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		User user = userDao.getByUsername(username); 
		
		//from person's side
		userDao.removeFriend(user, friendUsername);
		
		User friend = userDao.getByUsername(friendUsername);
		
		//from friend's side
		userDao.removeFriend(friend, username);
		
		return Response.status(200).build(); 
	}
	
	@POST
	@Path("/make-friend-request/{username}/{friendUsername}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response addFriend(@PathParam("username") String username, @PathParam("friendUsername") String friendUsername) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		User potentialFriend = userDao.getByUsername(friendUsername); 
		userDao.makeFriendRequest(potentialFriend, username);
		return Response.status(200).build(); 
	}
	
	@GET
	@Path("/mutual-friends/{username}/{friendUsername}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getMutualFriends(@PathParam("username") String username, @PathParam("friendUsername") String friendUsername) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		User user = userDao.getByUsername(username);
		User friend = userDao.getByUsername(friendUsername);
		
		List<Friend> activeFriends = userDao.getUserFriends(user);
		
		List<Friend> mutualFriends = userDao.getMutualFriends(user, friend, activeFriends);
		
		List<User> mutualFriendsToUsers = new ArrayList<User>();
		
		for(Friend mutualFriend : mutualFriends)
		{
			mutualFriendsToUsers.add(userDao.getByUsername(mutualFriend.getUsername()));
		}
		
		return mutualFriendsToUsers;
	}
	

	@POST
    @Path("/posts/add-comment/{username}/{postPublisher}/{comment}/{imageID}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response addComments(@PathParam("username") String username, @PathParam("postPublisher") String postPublisher, @PathParam("comment") String comment, @PathParam("imageID") String imageID) {
        UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
        User publisher = userDao.getByUsername(postPublisher);
        Post post = userDao.getPostByPicture(publisher, imageID);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/YYYY");
        post.getComments().add(new Comment(username, LocalDate.now().format(formatter).toString(), LocalDate.now().format(formatter).toString(), comment, false));
        //dodati date formater

        return Response.status(200).build();
    }
	
	@POST
    @Path("/add-post/{username}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response addPost(HashMap<String, String> body, @PathParam("username") String username) {
		Post post = new Post(new Image(body.get("picturePath"), false), body.get("text"), new ArrayList<Comment>(), false);
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
        User user = userDao.getByUsername(username);
        user.getImages().add(post.getPicture());
        user.getPosts().add(post);
		return Response.status(200).build();
    }
	
	@DELETE
    @Path("/posts/delete-comment/{username}/{postPublisher}/{comment}/{imageID}/{date}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteComments(@PathParam("username") String username, @PathParam("postPublisher") String postPublisher, @PathParam("comment") String comment, @PathParam("imageID") String imageID,@PathParam("datum") String datum) {
        UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
        User publisher = userDao.getByUsername(postPublisher);
        Post post = userDao.getPostByPicture(publisher, imageID);
        for(Comment c: post.getComments()) {
        	if(c.getText().equals(comment) && c.getDate().equals(datum) && c.getPublisher().equals(postPublisher)) {
        		c.setDeleted(true);
        	}
        }

        return Response.status(200).build();
    }
}

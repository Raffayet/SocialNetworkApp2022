package dao;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.Gson;

import beans.Friend;
import beans.FriendRequest;
import beans.Image;
import beans.Post;
import beans.User;
import enums.RequestStatus;

public class UserDAO {
	private Map<String, User> users = new HashMap<>();
	
	public UserDAO() {}
	
	public UserDAO(String contextPath){
		try {
			loadUsers(contextPath);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void loadUsers(String contextPath) throws Exception {
		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
		
		List<User> userData = mapper.readValue(new File(contextPath), new TypeReference<List<User>>(){});
		for(User u : userData) {
			users.put(u.getUsername(), u);
		}	
	}
	
	
	public String readFileAsString(String file)throws Exception
    {
        return new String(Files.readAllBytes(Paths.get(file)));
    }
	
	public User find(String username, String password) {
		if (!users.containsKey(username)) {
			return null;
		}
		User user = users.get(username);
		if (!user.getPassword().equals(password)) {
			return null;
		}
		return user;
	}
	
	public void addUser(User user) {
		this.users.put(user.getUsername(), user);
	}
	
	
	public User getByUsername(String username) {
		return users.get(username);
	}
	
	public Collection<User> findAll() {
		return users.values();
	}

	public void editUser(User userToEdit, HashMap<String, String> values) {
		if (!values.get("password").equals(""))
			userToEdit.setPassword(values.get("password"));
		userToEdit.setEmail(values.get("email"));
		userToEdit.setFirstName(values.get("firstName"));
		userToEdit.setLastName(values.get("lastName"));
	}

	public Post getPostByPicture(User user, String imageId) {
		for(Post post : user.getPosts())
		{
			if (post.getPicture().getPath().equals("./images/" + imageId) && !post.getDeleted())
				return post;
		}
		
		return null;
	}

	public void deletePost(User user, Post post) {
		for(Post userPost : user.getPosts())
		{
			if(userPost.getPicture().equals(post.getPicture()))
			{
				post.setDeleted(true);
			}
		}
	}

	public void deleteImage(User user, String imageId) {
		for(Image image : user.getImages())
		{
			if(image.getPath().equals("./images/" + imageId))
				image.setDeleted(true);
		}
	}

	public List<Image> getActiveImages(User user) {
		
		List<Image> activeImages = new ArrayList<Image>();
		
		for(Image image : user.getImages())
		{
			if(!image.getDeleted())
				activeImages.add(image);
		}
		return activeImages;
	}

	public List<Friend> getUserFriends(User user) {
		
		List<Friend> activeFriends = new ArrayList<Friend>();
		
		for(Friend friend : user.getFriends())
		{
			if(friend.getActive())
				activeFriends.add(friend);	
		}
		
		return activeFriends;
	}

	public List<FriendRequest> getFriendRequests(User user) {
		
		List<FriendRequest> pendingFriendRequests = new ArrayList<FriendRequest>();
		
		for(FriendRequest friendRequest : user.getFriendRequests())
		{
			if(friendRequest.getState().equals(RequestStatus.PENDING))
				pendingFriendRequests.add(friendRequest);
		}
		return pendingFriendRequests;
	}

	public void changeRequestStatus(User user, String sender, String statusType) {
		for (FriendRequest friendRequest : user.getFriendRequests())
		{
			if(friendRequest.getSender().equals(sender))
			{
				if(statusType.equals("accept"))
				{
					friendRequest.setState(RequestStatus.ACCEPTED);
					List<Friend> oldFriends = user.getFriends();
					oldFriends.add(new Friend(sender, true));
					user.setFriends(oldFriends);
				}
		
				else
					friendRequest.setState(RequestStatus.REJECTED);
			}
		}
		
	}
}

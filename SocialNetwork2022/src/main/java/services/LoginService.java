package services;

import java.util.HashMap;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;

import beans.User;
import dao.UserDAO;

@Path("/login")
public class LoginService {
	
	@Context
	ServletContext context;
	
	public LoginService() {}
	
	@PostConstruct
	public void init() {
		if (context.getAttribute("userDAO") == null) {
	    	String contextPath = context.getRealPath("/data/users.json");
	    	context.setAttribute("userDAO", new UserDAO(contextPath));
		}
	}
	
	@POST
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	//@Produces(MediaType.APPLICATION_JSON)
	public Response login(HashMap<String, String> values) {
		NewCookie cookie = new NewCookie("loggedUser", values.get("username"));
		
		UserDAO userDao = (UserDAO) context.getAttribute("userDAO");
		User loggedUser = userDao.find(values.get("username"), values.get("password"));
		if (loggedUser == null) {
			return Response.status(400).entity("Invalid username or password").build();
		}
		
		return Response.status(200).cookie(cookie).build();
	}
}

package services;

import java.util.HashMap;


import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSessionContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import enums.Gender;
import enums.UserType;
import beans.User;
import dao.UserDAO;

@Path("/registration")
public class RegistrationService {
	
	@Context
	ServletContext ctx;
	
	public RegistrationService() {}
	
	@PostConstruct
	public void init() {
		if (ctx.getAttribute("userDAO") == null) {
	    	String contextPath = ctx.getRealPath("/data/users.json");
			ctx.setAttribute("userDAO", new UserDAO(contextPath));
		}
	}
	
	@POST
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	//@Produces(MediaType.APPLICATION_JSON)
	public Response register(HashMap<String, String> values) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		User userExists = userDao.getByUsername(values.get("username"));
		if (userExists != null) {
			return Response.status(400).entity("User already exists").build();
		}
		User newuser = new User(values.get("username"), values.get("password"), values.get("email"), values.get("name"), values.get("lastName"), values.get("dateOfBirth"), Gender.valueOf(values.get("gender")), UserType.REGULAR_USER, "", false);
		userDao.addUser(newuser);
		ctx.setAttribute("loggedUser", newuser);
		return Response.status(200).build();
	}
}

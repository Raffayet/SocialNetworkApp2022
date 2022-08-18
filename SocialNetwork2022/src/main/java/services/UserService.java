package services;

import java.util.Collection;

import java.util.HashMap;
import java.util.List;

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

@Path("/user")
public class UserService {
	
	@Context
	ServletContext context;
	
	public UserService() {}
	
	@PostConstruct
	public void init() {
		if (context.getAttribute("userDAO") == null) {
	    	String contextPath = context.getRealPath("/data/users.json");
	    	context.setAttribute("userDAO", new UserDAO(contextPath));
		}
	}
	
	@GET
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<User> getAllUsers() {
		UserDAO userDao = (UserDAO) context.getAttribute("userDAO");
		return userDao.findAll();
	}
}

package services;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import dao.MessagesDAO;

@Path("/dm")
public class MessagesService {

	@Context
	ServletContext ctx;
	
	public MessagesService() {}
	
	@PostConstruct
	public void init() {
		if (ctx.getAttribute("messagesDAO") == null) {
	    	String contextPath = ctx.getRealPath("/data/messages.json");
			ctx.setAttribute("messagesDAO", new MessagesDAO(contextPath));
		}
	}
	
	@GET
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response login() {
		return Response.status(200).build();
	}
}


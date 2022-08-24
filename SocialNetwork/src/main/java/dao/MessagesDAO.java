package dao;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import beans.DirectMessage;
import beans.User;

public class MessagesDAO {
	private List<DirectMessage> messages = new ArrayList<>();
	
	public MessagesDAO() {}
	
	public MessagesDAO(String contextPath){
		try {
			loadMessages(contextPath);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void loadMessages(String contextPath) throws Exception {
		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
		
		List<DirectMessage> messagesData = mapper.readValue(new File(contextPath), new TypeReference<List<DirectMessage>>(){});
		for(DirectMessage m : messagesData) {
			messages.add(m);
		}
		System.out.println(messages.get(0));
	}
}

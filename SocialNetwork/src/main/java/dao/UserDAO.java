package dao;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import beans.User;

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
		this.users.put(user.getUsername(),user);
	}
	
	public User getByUsername(String username) {
		return users.get(username);
	}
	
	public Collection<User> findAll() {
		return users.values();
	}
	
}

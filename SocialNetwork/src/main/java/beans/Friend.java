package beans;

public class Friend {
	private String username;
	private Boolean active;
	
	public Friend() {}
	
	public Friend(String username, Boolean active) {
		super();
		this.username = username;
		this.active = active;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	
	
}

package beans;

public class NJIHOVUSER {
	private String username;
	private String password;
	private String JWTToken;
	
	public NJIHOVUSER() {
		
	}

	public NJIHOVUSER(String username, String password) {
		this();
		this.username = username;
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getJWTToken() {
		return JWTToken;
	}

	public void setJWTToken(String jWTToken) {
		JWTToken = jWTToken;
	}

	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", JWTToken=" + JWTToken + "]";
	}

}

package beans;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import enums.Gender;
import enums.UserType;

public class User {
	private String username;
	private String password;
	private String email;
	private String firstName;
	private String lastName;
	private String birthDate;
	public Gender gender;
	public UserType userType;
	private Image profileImg;
	private List<Image> images;
	private List<Friend> friends;
	private List<Post> posts;
	private List<FriendRequest> friendRequests;
	private Boolean isPrivate;
	
	public User() {
			
	}
	
	
	public User(String username, String password, String email, String firstName, String lastName, String birthDate,
			Gender gender, UserType userType, Image profileImg, Boolean isPrivate) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDate = birthDate;
		this.gender = gender;
		this.userType = userType;
		this.profileImg = profileImg;
		this.isPrivate = isPrivate;
	}
	
	
		
	public User(String username, String password, String email, String firstName, String lastName, String birthDate,
			Gender gender, UserType userType, Image profileImg, List<Image> images, Boolean isPrivate) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDate = birthDate;
		this.gender = gender;
		this.userType = userType;
		this.profileImg = profileImg;
		this.images = images;
		this.isPrivate = isPrivate;
	}

	
	
	public User(String username, String password, String email, String firstName, String lastName, String birthDate,
			Gender gender, UserType userType, Image profileImg, List<Image> images, List<Post> posts,
			Boolean isPrivate) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDate = birthDate;
		this.gender = gender;
		this.userType = userType;
		this.profileImg = profileImg;
		this.images = images;
		this.posts = posts;
		this.isPrivate = isPrivate;
	}

	
	public User(String username, String password, String email, String firstName, String lastName, String birthDate,
			Gender gender, UserType userType, Image profileImg, List<Image> images, List<Friend> friends,
			List<Post> posts, Boolean isPrivate) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDate = birthDate;
		this.gender = gender;
		this.userType = userType;
		this.profileImg = profileImg;
		this.images = images;
		this.friends = friends;
		this.posts = posts;
		this.isPrivate = isPrivate;
	}


	public User(String username, String password, String email, String firstName, String lastName, String birthDate,
			Gender gender, UserType userType, Image profileImg, List<Image> images, List<Friend> friends,
			List<Post> posts, List<FriendRequest> friendRequests, Boolean isPrivate) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDate = birthDate;
		this.gender = gender;
		this.userType = userType;
		this.profileImg = profileImg;
		this.images = images;
		this.friends = friends;
		this.posts = posts;
		this.friendRequests = friendRequests;
		this.isPrivate = isPrivate;
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



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}



	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



	public String getBirthDate() {
		return birthDate;
	}



	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}



	public Gender getGender() {
		return gender;
	}



	public void setGender(Gender gender) {
		this.gender = gender;
	}



	public UserType getUserType() {
		return userType;
	}



	public void setUserType(UserType userType) {
		this.userType = userType;
	}



	public Image getProfileImg() {
		return profileImg;
	}



	public void setProfileImg(Image profileImg) {
		this.profileImg = profileImg;
	}



	public List<Image> getImages() {
		return images;
	}



	public void setImages(List<Image> images) {
		this.images = images;
	}



	public List<Friend> getFriends() {
		return friends;
	}



	public void setFriends(List<Friend> friends) {
		this.friends = friends;
	}



	public List<Post> getPosts() {
		return posts;
	}



	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}



	public List<FriendRequest> getFriendRequests() {
		return friendRequests;
	}



	public void setFriendRequests(List<FriendRequest> friendRequests) {
		this.friendRequests = friendRequests;
	}



	public Boolean getIsPrivate() {
		return isPrivate;
	}



	public void setIsPrivate(Boolean isPrivate) {
		this.isPrivate = isPrivate;
	}



	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", email=" + email + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", birthDate=" + birthDate + ", gender=" + gender + ", userType="
				+ userType + ", profileImg=" + profileImg + ", images=" + images + ", friends=" + friends + ", posts="
				+ posts + ", friendRequests=" + friendRequests + ", isPrivate=" + isPrivate + "]";
	}



	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((birthDate == null) ? 0 : birthDate.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
		result = prime * result + ((friendRequests == null) ? 0 : friendRequests.hashCode());
		result = prime * result + ((friends == null) ? 0 : friends.hashCode());
		result = prime * result + ((gender == null) ? 0 : gender.hashCode());
		result = prime * result + ((images == null) ? 0 : images.hashCode());
		result = prime * result + ((isPrivate == null) ? 0 : isPrivate.hashCode());
		result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((posts == null) ? 0 : posts.hashCode());
		result = prime * result + ((profileImg == null) ? 0 : profileImg.hashCode());
		result = prime * result + ((userType == null) ? 0 : userType.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (birthDate == null) {
			if (other.birthDate != null)
				return false;
		} else if (!birthDate.equals(other.birthDate))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (firstName == null) {
			if (other.firstName != null)
				return false;
		} else if (!firstName.equals(other.firstName))
			return false;
		if (friendRequests == null) {
			if (other.friendRequests != null)
				return false;
		} else if (!friendRequests.equals(other.friendRequests))
			return false;
		if (friends == null) {
			if (other.friends != null)
				return false;
		} else if (!friends.equals(other.friends))
			return false;
		if (gender != other.gender)
			return false;
		if (images == null) {
			if (other.images != null)
				return false;
		} else if (!images.equals(other.images))
			return false;
		if (isPrivate == null) {
			if (other.isPrivate != null)
				return false;
		} else if (!isPrivate.equals(other.isPrivate))
			return false;
		if (lastName == null) {
			if (other.lastName != null)
				return false;
		} else if (!lastName.equals(other.lastName))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (posts == null) {
			if (other.posts != null)
				return false;
		} else if (!posts.equals(other.posts))
			return false;
		if (profileImg == null) {
			if (other.profileImg != null)
				return false;
		} else if (!profileImg.equals(other.profileImg))
			return false;
		if (userType != other.userType)
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
}

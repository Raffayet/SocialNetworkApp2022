package beans;

import java.time.LocalDate;

public class Comment {
	
	private LocalDate dateOfComment;
	private LocalDate dateOfChange;
	private User user;
	
	
	
	
	public Comment() {
		super();
	}




	public Comment(LocalDate dateOfComment, LocalDate dateOfChange, User user) {
		super();
		this.dateOfComment = dateOfComment;
		this.dateOfChange = dateOfChange;
		this.user = user;
	}




	public LocalDate getDateOfComment() {
		return dateOfComment;
	}




	public void setDateOfComment(LocalDate dateOfComment) {
		this.dateOfComment = dateOfComment;
	}




	public LocalDate getDateOfChange() {
		return dateOfChange;
	}




	public void setDateOfChange(LocalDate dateOfChange) {
		this.dateOfChange = dateOfChange;
	}




	public User getUser() {
		return user;
	}




	public void setUser(User user) {
		this.user = user;
	}




	@Override
	public String toString() {
		return "Comment [dateOfComment=" + dateOfComment + ", dateOfChange=" + dateOfChange + ", user=" + user + "]";
	}




	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dateOfChange == null) ? 0 : dateOfChange.hashCode());
		result = prime * result + ((dateOfComment == null) ? 0 : dateOfComment.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
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
		Comment other = (Comment) obj;
		if (dateOfChange == null) {
			if (other.dateOfChange != null)
				return false;
		} else if (!dateOfChange.equals(other.dateOfChange))
			return false;
		if (dateOfComment == null) {
			if (other.dateOfComment != null)
				return false;
		} else if (!dateOfComment.equals(other.dateOfComment))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}
	
	
	

}

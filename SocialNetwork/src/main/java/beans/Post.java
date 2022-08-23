package beans;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;

@JsonAutoDetect(fieldVisibility = Visibility.ANY)
public class Post {
	private String picture;
	private String text;
	private List<Comment> comments;
	
	public Post() {}

	public Post(String picture, String text, List<Comment> comments) {
		super();
		this.picture = picture;
		this.text = text;
		this.comments = comments;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "Post [picture=" + picture + ", text=" + text + "]";
	}
	
	
	
}

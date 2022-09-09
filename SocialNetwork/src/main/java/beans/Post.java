package beans;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;

@JsonAutoDetect(fieldVisibility = Visibility.ANY)
public class Post {
	private Image picture;
	private String text;
	private List<Comment> comments;
	private Boolean deleted;
	
	public Post() {}

	public Post(Image picture, String text, List<Comment> comments, Boolean deleted) {
		super();
		this.picture = picture;
		this.text = text;
		this.comments = comments;
		this.deleted = deleted;
	}

	public Image getPicture() {
		return picture;
	}

	public void setPicture(Image picture) {
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

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}
}

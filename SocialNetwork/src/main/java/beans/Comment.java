package beans;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;

@JsonAutoDetect(fieldVisibility = Visibility.ANY)
public class Comment {
	private String publisher;
	private String date;
	private String editDate;
	private String text;
	private boolean deleted;
	
	public Comment() {}

	




	public Comment(String publisher, String date, String editDate, String text, boolean deleted) {
		super();
		this.publisher = publisher;
		this.date = date;
		this.editDate = editDate;
		this.text = text;
		this.deleted = deleted;
	}

	public String getText() {
		return text;
	}
	
	
	
	public void setText(String text) {
		this.text = text;
	}
	
	
	
	public boolean isDeleted() {
		return deleted;
	}
	
	
	
	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}


	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getEditDate() {
		return editDate;
	}

	public void setEditDate(String editDate) {
		this.editDate = editDate;
	}

	@Override
	public String toString() {
		return "Comment [publisher=" + publisher + ", date=" + date + ", editDate=" + editDate + "]";
	}
	
	
}

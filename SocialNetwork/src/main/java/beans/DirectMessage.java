package beans;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DirectMessage {
	private String sender;
	private String recipient;
	private String content;
	private LocalDateTime dateTime;
	
	public DirectMessage() {}

	public DirectMessage(String sender, String recipient, String content, LocalDateTime dateTime) {
		super();
		this.sender = sender;
		this.recipient = recipient;
		this.content = content;
		this.dateTime = dateTime;
	}

	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	public String getRecipient() {
		return recipient;
	}

	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public LocalDateTime getDateTime() {
		return dateTime;
	}

	public void setDateTime(String dateTime) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		LocalDateTime dt = LocalDateTime.parse(dateTime, formatter);
		this.dateTime = dt;
	}

	@Override
	public String toString() {
		return "DirectMessage [sender=" + sender + ", recipient=" + recipient + ", content=" + content + ", date="
				+ dateTime + "]";
	}
}

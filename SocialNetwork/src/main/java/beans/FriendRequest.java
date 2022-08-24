package beans;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;

import enums.RequestStatus;

@JsonAutoDetect(fieldVisibility = Visibility.ANY)
public class FriendRequest {
	private String sender;
	private String recipient;
	private RequestStatus status;
	private String date;
	
	public FriendRequest() {}

	public FriendRequest(String sender, String recipient, RequestStatus status, String date) {
		super();
		this.sender = sender;
		this.recipient = recipient;
		this.status = status;
		this.date = date;
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

	public RequestStatus getState() {
		return status;
	}

	public void setState(RequestStatus state) {
		this.status = state;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "FriendRequest [sender=" + sender + ", recipient=" + recipient + ", status=" + status + ", date=" + date
				+ "]";
	}
	
}

package beans;

import java.time.LocalDate;

import enums.RequestStatus;

public class FriendRequest {
	
	private User sender;
	private User receiver;
	public RequestStatus requestStatus;
	private LocalDate date;
	
	
	
	
	
	public FriendRequest() {
		super();
	}





	public FriendRequest(User sender, User receiver, RequestStatus requestStatus, LocalDate date) {
		super();
		this.sender = sender;
		this.receiver = receiver;
		this.requestStatus = requestStatus;
		this.date = date;
	}





	public User getSender() {
		return sender;
	}





	public void setSender(User sender) {
		this.sender = sender;
	}





	public User getReceiver() {
		return receiver;
	}





	public void setReceiver(User receiver) {
		this.receiver = receiver;
	}





	public RequestStatus getRequestStatus() {
		return requestStatus;
	}





	public void setRequestStatus(RequestStatus requestStatus) {
		this.requestStatus = requestStatus;
	}





	public LocalDate getDate() {
		return date;
	}





	public void setDate(LocalDate date) {
		this.date = date;
	}





	@Override
	public String toString() {
		return "FriendRequest [sender=" + sender + ", receiver=" + receiver + ", requestStatus=" + requestStatus
				+ ", date=" + date + "]";
	}





	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((receiver == null) ? 0 : receiver.hashCode());
		result = prime * result + ((requestStatus == null) ? 0 : requestStatus.hashCode());
		result = prime * result + ((sender == null) ? 0 : sender.hashCode());
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
		FriendRequest other = (FriendRequest) obj;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (receiver == null) {
			if (other.receiver != null)
				return false;
		} else if (!receiver.equals(other.receiver))
			return false;
		if (requestStatus != other.requestStatus)
			return false;
		if (sender == null) {
			if (other.sender != null)
				return false;
		} else if (!sender.equals(other.sender))
			return false;
		return true;
	}
	
	
	

}

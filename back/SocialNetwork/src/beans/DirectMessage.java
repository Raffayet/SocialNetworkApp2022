package beans;

import java.time.LocalDate;

public class DirectMessage {
	
	private String messageContent;
	private LocalDate date;
	private User sender;
	private User receiver;
	
	
	
	
	public DirectMessage() {
		super();
	}




	


	public DirectMessage(String messageContent, LocalDate date, User sender, User receiver) {
		super();
		this.messageContent = messageContent;
		this.date = date;
		this.sender = sender;
		this.receiver = receiver;
	}







	public String getMessageContent() {
		return messageContent;
	}




	public void setMessageContent(String messageContent) {
		this.messageContent = messageContent;
	}




	public LocalDate getDate() {
		return date;
	}




	public void setDate(LocalDate date) {
		this.date = date;
	}




	


	public User getReceiver() {
		return receiver;
	}




	public void setReceiver(User receiver) {
		this.receiver = receiver;
	}




	public User getSender() {
		return sender;
	}




	public void setSender(User sender) {
		this.sender = sender;
	}







	@Override
	public String toString() {
		return "DirectMessage [messageContent=" + messageContent + ", date=" + date + ", sender=" + sender
				+ ", receiver=" + receiver + "]";
	}







	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((messageContent == null) ? 0 : messageContent.hashCode());
		result = prime * result + ((receiver == null) ? 0 : receiver.hashCode());
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
		DirectMessage other = (DirectMessage) obj;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (messageContent == null) {
			if (other.messageContent != null)
				return false;
		} else if (!messageContent.equals(other.messageContent))
			return false;
		if (receiver == null) {
			if (other.receiver != null)
				return false;
		} else if (!receiver.equals(other.receiver))
			return false;
		if (sender == null) {
			if (other.sender != null)
				return false;
		} else if (!sender.equals(other.sender))
			return false;
		return true;
	}
	
	
	

}

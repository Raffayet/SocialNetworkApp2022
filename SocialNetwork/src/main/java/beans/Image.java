package beans;

public class Image {
	private String path;
	private Boolean deleted;
	
	public Image() {}
	
	public Image(String path, Boolean deleted) {
		super();
		this.setPath(path);
		this.setDeleted(deleted);
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}
}

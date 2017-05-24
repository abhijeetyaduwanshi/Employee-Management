package exceptions;

public class AppException extends Exception {

	private static final long serialVersionUID = 5857501739413386048L;

	public AppException(String errorMsg) {
		super(errorMsg);
	}

	public AppException(String errorMsg, Throwable cause) {
		super(errorMsg, cause);
	}

}

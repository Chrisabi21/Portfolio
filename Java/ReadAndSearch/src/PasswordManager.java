
public class PasswordManager {
	private static final String PASSWORD = "admin";
	
	public boolean passwordCheck(String pass) {
		if (pass.equals(PASSWORD)) {
			return true;
			
		}else {
			return false;
		}
	}
	
}

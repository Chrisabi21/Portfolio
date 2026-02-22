import java.io.IOException;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Manager {
	
	private PasswordManager pass;
	private CompanyList listOfCompanies;
	private Scanner scanner;
	
	public Manager() {
		pass = new PasswordManager();
		scanner = new Scanner(System.in);
		listOfCompanies = new CompanyList();
	}
	
	public void run() {
		pass = new PasswordManager();
		scanner = new Scanner(System.in);
		int passTries = 0;
		
		while (passTries <= 3) {
            System.out.print("Enter the password: ");
            String userPass = scanner.nextLine();
            int triesLeft = 3 - passTries;

            // Check if the entered password matches the stored password
            if (pass.passwordCheck(userPass)) {
            	System.out.println("\nPassword Correct. WELCOME\n");
            	this.userAccess();
                
            }else {
                System.out.println("Incorrect password. Please try again.");
                System.out.println("Number of Tries left "+triesLeft+"\n");
            }
            
            if(triesLeft == 0) {
            	System.out.println("You are locked out. Restart");
            	System.exit(0);
            }
            
            passTries++;
		}
		
		
		
		
	}
	
	public void userAccess() {
		try {
			// Reading the Csv file
			listOfCompanies.readDoc("companies.csv");
			// Writing into txt file 
			listOfCompanies.writeToFile("Report.txt");
		} catch (IOException e) {
			System.out.println("File not found");
			System.exit(0);
		}
		
		while(true) {
			// Allowing the user to enter a company number
			System.out.print("Enter a company number: ");
			String userInput = scanner.nextLine();
	        try{
	        	int companyID = Integer.parseInt(userInput);
	        	listOfCompanies.companyExist(companyID);
	        }catch(NumberFormatException e) {
	        	System.out.println("\nWrong Format for Id. Numbers only");
	        }catch(InputMismatchException e) {
	        	System.out.println("\nWrong Format for Id. Numbers only");
	        }
	          
		}
		
	}
	
}

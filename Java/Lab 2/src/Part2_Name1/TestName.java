package Part2_Name1;

//F21SF Lecture 3
public class TestName {

	public static void main(String[] args) {
		
		// Name 1
		Name name1 = new Name("Jane","Jo", "Jones");
		String lastname  = name1.getLastName();
		System.out.println("Last name is " + lastname + "");
		
		// Change the last name
		name1.setLastName("Smith");
		// get new last name
		String newLastName = name1.getLastName();
		System.out.println("Last name is " + newLastName + "\n");
				
		
		
		// New Name 2
		Name name2 = new Name("Mary", "Ann", "Smith");
		
		// FirstName and LastName
		String firstAndLastname = name2.getFirstAndLastName();
		System.out.println("First name and last name  : " + firstAndLastname);
		// FirstName initial and LastName
		System.out.println("First name initials and last name  : "  + name2.getInitPeriodLast()+ "\n");
		
		// FullName
		String firstnameMiddleNameSurname = name2.getFullName();
		System.out.println("Firstname MiddleName Surname : " + firstnameMiddleNameSurname);
		// Middle name Initials
		System.out.println("Firstname MiddleName initials and Surname : " +name2.fullnameAndInitials()+ "\n");
		
		// Surname comma FirstName
		String surnameComFirstname = name2.getLastCommaFirst();
		System.out.println("Surname, firstname : " + surnameComFirstname + "\n");
		
		

	}
		
}

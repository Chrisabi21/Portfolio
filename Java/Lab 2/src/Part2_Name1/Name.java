package Part2_Name1;
//First Name class
//F21SF - Jamie 
public class Name {
  private String firstName, middleName, lastName;  // which is shorthand for ...
/*  private String firstName;
    private String middleName;
    private String lastName;
*/
   
   //constructor to create object with first, middle and last name
   //if there isn't a middle name, that parameter could be an empty String // mjg is this good?
   public Name(String fName, String mName, String lName) {
// This doesn't work:  public Name(String fName, mName, lName) {
		firstName  = fName;
		middleName = mName;
		lastName   = lName;
   }

  //returns the first name
  public String getFirstName() {return firstName; }
  //returns the last name
  public String getLastName()  {return lastName; }
  //returns the middle name 
  public String getMiddleName() {return middleName;}
  
  //change the last name to the value provided in the parameter
  public void setLastName(String ln) {
	  lastName = ln;
  }
  
  //returns the first name then a space then the last name
  public String getFirstAndLastName() {
		return firstName + " " + lastName;
  }
  
  //returns the full name 
  public String getFullName() {
	  return firstName + " " + middleName + " " + lastName;
  }
  
  //returns the last name followed by a comma and a space
  //  then the first name
  public String getLastCommaFirst() {
		return lastName + ", "+ firstName;
  }
  
  //returns name in the format initial, period, space, lastname
  public String getInitPeriodLast() {
	  return firstName.charAt(0) + ". " + lastName;
  }
  
  public String fullnameAndInitials() {
	  return firstName + " " + middleName.charAt(0) + ". " + lastName;
  }
}
  
 

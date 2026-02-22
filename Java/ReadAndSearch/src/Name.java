
public class Name {
	
	private String companyFirstName, companyLastName, companyFullName, companyInitials;
	private String [] companyNameSplit;
  
	public Name (String cFullName) {
		companyNameSplit = cFullName.split(" ");
        
        if (companyNameSplit.length == 2) {
            companyFirstName = companyNameSplit[0];
            companyLastName = companyNameSplit[1];
        }else if(companyNameSplit.length == 1) {
        	companyFirstName = companyNameSplit[0];
        	companyLastName = "";
        }else {
        	companyFirstName = cFullName;
        	companyLastName = "";
        }
	}
	  
	public String getCompanyFirstName() {return companyFirstName; }
	public String getCompanyLastName() {return companyLastName; }
	public String getCompanyFullName() { 
		if (companyNameSplit.length == 2) 
		{
			companyFullName =  companyFirstName + " " + companyLastName;
        } else 
        {
        	companyFullName = companyFirstName;
        }
		
		return companyFullName;
	}
	public String getCompanyInitials() {
		if (companyNameSplit.length == 2) 
		{
			companyInitials = companyFirstName.charAt(0)+""+companyLastName.charAt(0) ;
		}else 
		{
			companyInitials = companyFirstName.charAt(0)+"";
		}
		return companyInitials;
	}
	
	public void setCompanyFirstName(String companyFName) {
		companyFirstName = companyFName;
	}
	
	public void setCompanyLastName(String companyLName) {
		companyLastName = companyLName;
	}
 
}


/**
 * SOFTWARE ENGINEERING FOUNDATION
 * Company Class with the car details
 * Getters, Setters, Details for each company 
 * 
 * @author OLUWASEUN ABIODUN
 */
public class Company{
    
    // Instance Variable
    private Name companyName;
    private String companyLocation;
    private int companyNumber, companyRank, companyAge;
    private String companyProduct; 
    private final int sharesSize = 5;
    private int [] sharePrices;
    
    
    public Company(Name cName, String cProduct, String cLocation,
    int cNumber, int cRank, int cAge ){
        
        companyName = cName; 
        companyProduct = cProduct;
        companyLocation = cLocation;
        companyNumber = cNumber;
        companyRank = cRank;
        companyAge = cAge;
        sharePrices = new int[sharesSize];
        
    }
    
    // Getter for my instance variables
    public String getCompanyName(){ return companyName.getCompanyFullName();}
    public String getCompanyLocation(){ return companyLocation;}
    public int getCompanyNumber(){ return companyNumber;}
    public int getCompanyRank(){ return companyRank;}
    public int getCompanyAge(){ return companyAge;}
    public String getCompanyProduct(){ return companyProduct;}
    public String getShareprices() { 
    	String sharepricesNo = "";
		for (int index = 0; index < sharePrices.length; index++) {
			sharepricesNo+= sharePrices[index];
			
			if (index < sharePrices.length - 1) {
				sharepricesNo += ", ";
	        }
		}
		return sharepricesNo;
	} 
    public int [] getSharePriceArray() {
    	return sharePrices;
    }
    // End of Getter
    
    // Setter for my instance variable
    public void setCompanyName(Name sCName){ 
        companyName = sCName;
    }

    public void setCompanyNumber( int sCNo){
        companyNumber = sCNo;
    }
    
    public void setCompanyRank(int sCRank){
        companyRank = sCRank;
    }
    
    public void setCompanyAge(int sCAge){ 
        companyAge = sCAge;
    }
    
    public void setCompanyLocation(String sCLoc){ 
        companyLocation = sCLoc;
    }
    
    public void setSharePrices(int [] sharesP) {
    	for (int i = 0; i < sharePrices.length; i++) {
            sharePrices[i] = sharesP[i];
        }
    }
    
    // End of setters
    
    // Other Methods 
    
    // Getting the Average of the Share Prices for a Single company
    public double getAverageShareprice() { 
    	int totalShares = 0;
    	int highestPShare = sharePrices[0];
        int lowestPShare = sharePrices[0];
        int sharePLength = sharePrices.length;

		for (int shareIndex = 0; shareIndex < sharePLength; shareIndex++) {
			totalShares += sharePrices[shareIndex];
			if (sharePrices[shareIndex] < lowestPShare) {
            	lowestPShare = sharePrices[shareIndex];
            }
			if (sharePrices[shareIndex] > highestPShare) {
                highestPShare = sharePrices[shareIndex];
            }
		}
		totalShares -= highestPShare + lowestPShare;
		double average = totalShares/(sharePrices.length - 2);
		
		return average;
    }
    
    
    // Creates a String of the full details of a company
    public String getFullDetails() {
    	String fullDetails = companyName.getCompanyFullName()+ " is company number "+companyNumber+
        		".\n"+companyName.getCompanyFullName()+" produces "+companyProduct+" and is located at "+companyLocation+
        		".\n"+companyName.getCompanyFullName()+" was established "+companyAge+" years ago and has a past five-day share price of "+getShareprices()+
        		".\nTherefore they have an average unaltered share price of "+getAverageShareprice();
    	return fullDetails;
    }
    
    // Creates a String of the full details of a company
    public String getShortDetails() {
        String shortDetails = "CN "+companyNumber+" (" +companyName.getCompanyInitials()+") has an average share price of "
        +getAverageShareprice();
        return shortDetails;
    }
    
}
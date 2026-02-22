import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

/**
 * CompanyList with all the method to manipulate a list of companies. 
 * This class encapsulates an ArrayList of Company objects and has a list of methods to manipulate the companies .
 * Through this class, a list of companies can are read, added to, generated 
 * and manipulated as needed.
 * 
 * @author OLUWASEUN ABIODUN
 */
public class CompanyList {
	private ArrayList<Company> companyList;
	
	/**
	 * Creates an empty list of companies.
	 * Initialises the internal list to an empty ArrayList of Company objects.
	 */
	public CompanyList() {
		companyList = new ArrayList<Company> ();
	}
	
	
	/**
	 * To check if a company is already in the arrayList based on its company ID.
	 *
	 * @param newCompany The new company to be checked.
	 * @return true if the company is not already in the list, false otherwise.
	 */
	public boolean newCompanyCheck(Company newCompany) {
		int companyId = newCompany.getCompanyNumber();
		Company check = this.findById(companyId);
		
		if (check ==  null) {
			return true;
		}
		return false;
    }
	
	
	/**
	 * Reads the document line by line and populates company data using the populateCompany().
	 * The method opens and read a file specified by the 'doc' parameter,
	 * and populates company data using each line in the while loop.
	 *
	 * @param doc The filename of the document to be read.
	 * @throws IOException If an I/O error occurs while reading the file.
	 */
	public void readDoc(String doc) throws IOException {
		FileReader fileDoc = new FileReader(doc);
	    BufferedReader reader = new BufferedReader(fileDoc);
	    String line;
	    while ((line = reader.readLine()) != null) {
	    	populateCompany(line);
	    }
	    reader.close();
	}
	
	
	/**
	 * This method takes the parameter line from the readDoc method and process the data by
	 * splitting the line by comma into an array of data and creates a Company Object.
	 * It checks if the company is not already in the list before adding it. If the company already exists,
	 * it prints a message indicating the company exist.
	 * Among the list of item in the line the product and locations are separated by periods within 
	 * their respective comma-seperated fields 
	 * 
	 * @param line A string representing a line from a comma-separated document.
	 */
	private void populateCompany(String line) {
		int check  = 0;
		String errorMsg = "";
		Name companyName = new Name("");
		int companyNumber = 0, 
			companyRank = 0, 
			companyAge = 0;
		String [] products; 
		String [] location;
		int [] companyShares = {};
		String companyProduct = "";
		
		String[] companyDetails = line.split(",");
		String companyLocation = "";
		

//		Checking the companyName for Empty String
		if(isEmpty(companyDetails[0]) == true) {
			check +=1;
			errorMsg += "\nCompany Name is empty";
			
		}else {
			companyName = new Name(companyDetails[0]);
		}
		
//		Checking the company ID, company Rank and company Age
		try{
			companyNumber = Integer.parseInt(companyDetails[3]);
			companyRank = Integer.parseInt(companyDetails[4]);
			companyAge = Integer.parseInt(companyDetails[5]);
		}catch (NumberFormatException e) {
		    errorMsg += "\nInvalid Number format in the field (company Number, Rank or Age)";
		    check += 1;
		}
		
//		checking the length and Empty string for products
		products = companyDetails[1].split("\\.");
		if (checkProductItem(products) == true) {
			for(int i= 0; i<products.length; i ++) {
				companyProduct += products[i];
				if (i < products.length - 1) {
					companyProduct += ", ";
		        }
			}
		}else {
			check += 1;
			errorMsg += "\nProduct length is less than 2 or more than 5";
		}
		
//		checking for wrong value in the location
		try {
			Integer.parseInt(companyDetails[2]);
			check +=1;
			errorMsg += "\nInvalid Company Loaction";
		}catch(NumberFormatException e){
			location = companyDetails[2].split("\\.");
			companyLocation = "";
			for(int i= 0; i<location.length; i ++) {
				companyLocation += location[i];
				if (i < location.length - 1) {
					companyLocation += ", ";
		        }
			}
		}
//		checking for empty company Location
		if (companyLocation.isEmpty()) {
			check += 1;
			errorMsg += "\nLocation is Empty";
		}
		

		
//		Checking the number format for the sharePrices
		if(isEmpty(companyDetails[6])) {
			check += 1;
			errorMsg += "\nShare Prices 1 is empty ";
		}else if(isEmpty(companyDetails[7])) {
			check += 1;
			errorMsg += "\nShare Prices 2 is empty ";
		}else if(isEmpty(companyDetails[8])) {
			check += 1;
			errorMsg += "\nShare Prices 3 is empty ";
		}else if(isEmpty(companyDetails[9])) {
			check += 1;
			errorMsg += "\nShare Prices 4 is empty ";
		}else if(isEmpty(companyDetails[10])) {
			check += 1;
			errorMsg += "\nShare Prices 5 is empty ";
		}
		
//		Checking for number format exception
		try {
			Integer.parseInt(companyDetails[6]);
            Integer.parseInt(companyDetails[7]); 
            Integer.parseInt(companyDetails[8]); 
            Integer.parseInt(companyDetails[9]); 
            Integer.parseInt(companyDetails[10]);
            
            companyShares = new int[] {
    			Integer.parseInt(companyDetails[6]), 
                Integer.parseInt(companyDetails[7]), 
                Integer.parseInt(companyDetails[8]), 
                Integer.parseInt(companyDetails[9]), 
                Integer.parseInt(companyDetails[10])
            };
            
		}catch(NumberFormatException e) {
			check += 1;
			errorMsg+= "\nSharePrices is not a valid format";
		}
		
		if (check == 0){
			Company c = new Company(companyName,companyProduct,companyLocation,companyNumber, companyRank, companyAge );
			c.setSharePrices(companyShares);
			boolean companyCheck = newCompanyCheck(c);
			if(companyCheck == true) {
				companyList.add(c);
			}else {
				System.out.println(c.getCompanyName()+" Company Already exist");
			}
		}else {
			System.out.println(companyNumber+" has the following error and was not added: " + errorMsg+"\n");
		}
		
		
				
	}
	
	
	
	/**
	 * Generates a detailed report to a specified file. The report includes
	 * information such as the rank, ID, name, age, share prices, overall
	 * performance, location, and products of companies in a list. 
	 * The report is formatted in a tabular structure with columns of specific
	 * widths for each category.
	 * It also includes statistical information like the maximum, minimum, and average
	 * share prices, as well as the mean of share prices.
	 *
	 *
	 * @param filename The name of the file to which the report will be written.
	 *                 If the file does not exist, it will be created. If it does
	 *                 exist, it will be overwritten.
	 */
	public void writeToFile(String filename) {
		File file = new File(filename);
		try {
			FileWriter writer = new FileWriter(file);
			int[] columnWidths = {7, 12, 40, 10, 35 , 10 , 18, 55};
			
			writer.write("EXAMPLE REPORT \n\n");
			
			writer.write(String.format("%-" + columnWidths[0] + "s", "| Rank" ));
            writer.write(String.format("%-" + columnWidths[1] + "s", "| ID"));
            writer.write(String.format("%-" + columnWidths[2] + "s", "| Name"));
            writer.write(String.format("%-" + columnWidths[3] + "s", "| Age"));
            writer.write(String.format("%-" + columnWidths[4] + "s", "| SharePrices"));
            writer.write(String.format("%-" + columnWidths[5] + "s", "| Overall"));
            writer.write(String.format("%-" + columnWidths[6] + "s", "| Location"));
            writer.write(String.format("%-" + columnWidths[7] + "s", "| Products"));
            writer.write("\n\n");
            
            for (Company c : companyList) {
	        	String rank = rankNumber(c.getCompanyRank());
	        	writer.write(String.format("%-" + columnWidths[0] + "s","| "+ rank ));
                writer.write(String.format("%-" + columnWidths[1] + "s","| "+ c.getCompanyNumber()));
                writer.write(String.format("%-" + columnWidths[2] + "s","| "+ c.getCompanyName()));
                writer.write(String.format("%-" + columnWidths[3] + "s","| "+ c.getCompanyAge()+" years"));
                writer.write(String.format("%-" + columnWidths[4] + "s","| "+ c.getShareprices()));
                writer.write(String.format("%-" + columnWidths[5] + "s","| "+ c.getAverageShareprice()));
                writer.write(String.format("%-" + columnWidths[6] + "s","| "+ c.getCompanyLocation()));
                writer.write(String.format("%-" + columnWidths[7] + "s","| "+ c.getCompanyProduct()));
                
                writer.write("\n\n");
	        }
            
	        writer.write("\n");
	        writer.write(this.companyWithHighestAvg());
	        
	        writer.write("\n\nFour Statistical Method");
	        
	        writer.write("\n");
	        writer.write("The maximum Share Price among the list of companies is "+this.getMaxPrice());
	        
	        writer.write("\n");
	        writer.write("The minimum Share Price among the list of companies is "+this.getMinPrice());
	        
	        writer.write("\n");
	        writer.write("The Average Share Price of all the Share Prices is "+this.getAverageSharePrice());
	        
	        writer.write("\n");
	        writer.write("The Standard Deviation for all the share Prices is "+this.getStandardDeviation());
	        
			
			writer.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	
	/**
	 * To create a rank number with 0 in front to balance the values. 
	 * It creates a rank number as a string with a leading zero if necessary.
	 * If the rank number is a single digit, this method will attach a "0" to the front of the number.
	 *
	 * @param rankNo The rank number to be formatted.
	 * @return A string representation of the rank number with a leading zero if it is a single digit.
	 */
	public String rankNumber(int rankNo) {
		// Convert the integer to a string
        String rankStr = Integer.toString(rankNo);

        // Check if the string has a length of 1 (single-digit)
        if (rankStr.length() == 1) {
        	// Add a leading "0" to the string
        	rankStr = "0" + rankStr;
        }
        return rankStr;
	}
	
	
	/**
	 * Looks for a company in the arrayList of companies by its number.
	 * This method iterates through the arrayList of company and returns the company data if 
	 * the company number matches the provided 'newCompanyNo'. If no company is found with the given number,
	 * it returns null.
	 *
	 * @param newCompanyNo The ID of the company to find.
	 * @return The Company object if found, otherwise null.
	 */
	public Company findById(int newCompanyNo){
    	for (Company c : companyList){  
    		if (c.getCompanyNumber() == newCompanyNo){
    			return c;
    		}
    	}
    	return null;
    }
	
	
	/**
	 * Checks if a company exists in the list by its number and prints relevant information.
	 * This method uses the 'findById' method to check if a company with the provided number exists.
	 * If it does, it prints the company's short details. If it does not, it informs the user that the
	 * company does not exist.
	 *
	 * @param companyNo The number of the company to check for existence.
	 */
	public void companyExist(int companyNo) {
		int cNo = companyNo;
		Company exists = this.findById(cNo);
		
		if(exists == null) {
			System.out.println("Company Number "+cNo+" does not exist");
		}else {
			System.out.println(exists.getShortDetails());
			
		}
	}
	
	
	/**
	 * It calculates the company with the highest average share price in the arrayList of companies.
	 * This method iterates through the company list to find the company with the highest
	 * average share price. It returns the full details of that company as a string.
	 * If multiple companies have the same highest average share price, it returns the last
	 * company with the highest average in the iteration.
	 *
	 * @return A string containing the full details of the company with the highest average share price.
	 */
	public String companyWithHighestAvg() {
		double maxAvg = 0;
		String fullDetails = "";
		for (Company c : companyList){  
    		if (c.getAverageShareprice() > maxAvg){
    			maxAvg = c.getAverageShareprice();
    			fullDetails = c.getFullDetails();
    		}
    	}
		return fullDetails;
	}
	
	
	/**
	 * Checks if the number of item in the product falls within the required range.
	 * 
	 * This method iterates through an array of product items, trims each item to remove any whitespace, 
	 * and counts the number of non-empty items. It then checks if the count
	 * is greater than 2 and less than or equal to 5.
	 *
	 * @param prod An array of strings representing product items.
	 * @return A boolean value: true if the number of non-empty product items is more than 2 and less
	 *         than or equal to 5; false otherwise.
	 */
	
	public boolean checkProductItem(String[] prod) {
		boolean check = false;
		int count = 0;
		
		for(int i = 0; i <prod.length; i++) {
			String productTrimmed = prod[i].trim();
			if (productTrimmed != "") {
				count += 1;
			}
		}
		
		if(count > 2 && count <= 5) {
			check = true;
		}
		return check;
	}
	
	/**
	 * Checks if a given string is empty after trimming the whitespace.
	 * 
	 * This method trims the input string to remove whitespace and then checks
	 * if the resulting string is empty.
	 *
	 * @param item The string to be checked for emptiness.
	 * @return A boolean value: true if the trimmed string is empty; false otherwise.
	 */
	public boolean isEmpty(String item) {
		boolean isEmpt = false;
		String itemTrimmed = item.trim();
		
		if(itemTrimmed == "") {
			isEmpt = true;
		}
		
		return isEmpt;
	}
	
	/**
	 * This method fits all the array of share Prices into 1 arrayList 
	 * and calculates the means. Then the mean is used to calculate the standard deviation
	 * 
	 * @return The standard deviation of all share prices.
	 */
	public double getStandardDeviation() {
		
		ArrayList<Integer> allPrices = new ArrayList<Integer> ();
		int totalPrice = 0;
		for (Company c : companyList) {
			int [] sharePrices = c.getSharePriceArray();
			for (int i = 0; i < sharePrices.length; i++ ) {
				int share = sharePrices[i];
				allPrices.add(share);
			}
		}
		for (int price : allPrices) {
			totalPrice += price;
        }
        
		double mean = totalPrice / allPrices.size();
		
		double meanSquared = 0.0;
        for (int prices : allPrices) {
        	meanSquared += Math.pow(prices - mean, 2);
        }
        
        double stDeviation = Math.sqrt(meanSquared / allPrices.size());
        return stDeviation;
		
		
	}
	
	/**
	 * Gets the maximum share price among all companies in the arraylist of company.
	 * 
	 * This method iterates through a list of companies, retrieves each company's array of share prices,
	 * and compares each price to the current maximum. If the company share price is larger than
	 * the current maximum it becomes the new maximum.
	 *
	 * @return The highest share price found among all companies' share prices.
	 */
	public int getMaxPrice() {
		int maxPrice = 0;
		for (Company c : companyList) {
			int [] shares = c.getSharePriceArray();
			for (int i = 0; i < shares.length; i++ ) {
				int share = shares[i];
				if (share> maxPrice) {
					maxPrice= share;
				}
			}
			
		}	
		return maxPrice;
	}
	
	/**
	 * Gets the minimum share price among all companies in the arraylist of company.
	 * 
	 * This method iterates through a list of companies, retrieves each company's array of share prices,
	 * and compares each price to the current minimum. If the company share price is lower than
	 * the current minimum it becomes the new minimum.
	 *
	 * @return The lowest share price found among all companies' share prices.
	 */
	public int getMinPrice() {
		int minPrice = getMaxPrice();
		for (Company c : companyList) {
			int [] shares = c.getSharePriceArray();
			for (int i = 0; i < shares.length; i++ ) {
				int share = shares[i];
				if (share < minPrice) {
					minPrice = share;
				}
			}
		}
		return minPrice;
	}
	
	
	/**
	 * Calculates the average share price across all companies.
	 * 
	 * This method loops over a list of firms, totalling the sum of all share prices 
	 * and counting the total number of share prices. The average is then calculated by 
	 * dividing the entire sum by the number of share prices.
	 *
	 * @return The average share price, calculated as the total sum of share prices divided by the
	 *         number of share prices. Returns 0.0 if the count is zero to avoid division by zero.
	 */

	public double getAverageSharePrice() {
		double avgsharePrice = 0.0;
		int totalShare = 0;
		int count = 0;
		for (Company c: companyList) {
			int [] shares = c.getSharePriceArray();
			for (int i = 0; i < shares.length; i++ ) {
				int share = shares[i];
				totalShare += share;
				count += 1;
			}
		}
		
		avgsharePrice = totalShare / count ;
		
		return avgsharePrice;
	}
		
}



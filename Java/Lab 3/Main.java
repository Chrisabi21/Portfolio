public class Main {
    public static void main(String[] args) {
        CharitySystem report = new CharitySystem();
        report.populateEmployeeList();
        report.populateInvoiceList();
        report.populateVolunteerList();
        // System.out.println("total invoice value due : " + report.totalInvoiceDue());
        // System.out.println("total amount of money to pay for the current month : " + report.totalAmountForMonth());

        report.tableOfStaff();
        report.tableOfInvoices();
        report.listOfPayment();

        System.out.println("\nThe number of hours worked by staff : " + report.numberOfWorkedHours() );
        System.out.println("\nThe total Salary due : " + report.totalSalaryDue() );
        
    }
}

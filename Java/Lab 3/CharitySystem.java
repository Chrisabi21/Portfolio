import java.util.ArrayList;

public class CharitySystem {
    private ArrayList<Employee> employeesList;
    private ArrayList<CompanyInvoice> invoiceList;
    private ArrayList<volunteer> volunteerList;
    
    public CharitySystem() {
        employeesList = new ArrayList<>();
        invoiceList = new ArrayList<>();
        volunteerList = new ArrayList<>();
    }

    public void populateEmployeeList(){
        Employee e = new Employee("Seun", "Seunabi20@gmail.com", 35, true, "4053079180");
        employeesList.add(e);

        Employee e1 = new Employee("Victor", "Chris21@gmail.com", 11.29, false, "4053079180");
        employeesList.add(e1);

        Employee e2 = new Employee("Chris", "Seun23@gmail.com", 5.27, false, "4053079180");
        employeesList.add(e2);
    }

    public void populateInvoiceList(){
        CompanyInvoice cI1 = new CompanyInvoice();
        cI1.setRecipent("Google");
        cI1.setValue(20000);
        invoiceList.add(cI1);

        CompanyInvoice cI2 = new CompanyInvoice();
        cI2.setRecipent("Apple");
        cI2.setValue(50000);
        invoiceList.add(cI2);

        CompanyInvoice cI3 = new CompanyInvoice();
        cI3.setRecipent("Microsoft");
        cI3.setValue(25000);
        cI3.changeStatus();
        invoiceList.add(cI3);
    }

    public void populateVolunteerList(){
        volunteer v1 = new volunteer("Chris", "Chrisabi34@gmail.com", 15.27);
        volunteerList.add(v1);
        volunteer v2 = new volunteer("Chuks", "Victorchuks@gmail.com", 4.27);
        volunteerList.add(v2);

    }

    public double numberOfWorkedHours(){
        double totalHours = 0;
        for (Employee emp: employeesList){  totalHours += emp.hours ; }
        for (volunteer vol: volunteerList){ totalHours += vol.hours ; }
        return totalHours;
    }

    public double totalSalaryDue(){
        double totalSalary = 0;
        for (Employee emp: employeesList){
            double monthlyPay = emp.calculatePay() * 4;
            totalSalary += monthlyPay;
        }
        return totalSalary;
    }

    public double totalInvoiceDue(){
        double totalInvoice = 0;
        for(CompanyInvoice compInv: invoiceList){ 
            if(compInv.getPaid() == false){
                totalInvoice += compInv.getValue();
            }
        }
        return totalInvoice;
    }

    public double totalAmountForMonth(){
        double total = this.totalInvoiceDue() + this.totalSalaryDue();
        return total;
    }


    public void tableOfInvoices(){
        System.out.println("\nInvoices Due\n");
        System.out.printf("| %-10s | %-8s | %4s |%n", "Recipent", "Amount", "Status");
        for(CompanyInvoice compInv: invoiceList){ 
            if (compInv.getPaid() == false) {
                String stat = "Due";
                System.out.printf("| %-10s | %-8s | %4s |%n", 
                                compInv.getRecipent(),compInv.getValue(), stat);     
            }
            

        }
    }

    public void tableOfStaff(){
        System.out.println("\n Staff Details ");
        System.out.println("\n Employees ");
        System.out.printf("| %-10s | %-23s | %-10s| %-10s | %-15s| %-8s | %n",
             "Staff", "Email", "hours","Type", "Account", "Salary");
        for(Employee empl: employeesList){ 
            double salary = empl.calculatePay() * 4;
            String status = "";
            if(empl.getFullTime()){
                status = "Full Time";
            }else{
                status = "Part Time";
            }
            System.out.printf("| %-10s | %-23s | %-10s| %-10s | %-15s| %-8s | %n",
                empl.getName(),empl.getEmail(), empl.getHours(),status, empl.getAccountNo(), salary);
        }
        System.out.println("\n Volunteers ");
        System.out.printf("| %-10s | %-23s | %-10s| %n",
             "Volunteers", "Email", "Hours");
        for (volunteer vol: volunteerList){ 
            System.out.printf("| %-10s | %-23s | %-10s| %n",
                vol.getName(),vol.getEmail(), vol.gethours()); 
        }
    }

    public void listOfPayment(){
        double totalSal = totalSalaryDue();
        double totalInv = totalInvoiceDue();

        System.out.println("\nPayments Due for the month \n");
        System.out.printf("| %-10s | %-23s | %n",
             "Payment", "Amount");
        System.out.printf("| %-10s | %-23s | %n",
             "Salaries",totalSal);
        System.out.printf("| %-10s | %-23s | %n",
             "Invoices Due",totalInv);
    }


}

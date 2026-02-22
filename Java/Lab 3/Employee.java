public class Employee extends Staff implements payable {
    private Boolean fullTime;
    private String accountNo;
    final int fullPay = 2000;
    final int partPay = 10;
    private double salary;
    private Boolean paid;

    public Employee(String name, String Email, double hour, Boolean employeeStat , String acctNo) {
        super(name, Email, hour);
        fullTime = employeeStat;
        accountNo = acctNo;
        paid = false;
    }

    public Boolean getFullTime(){ return fullTime; }
    public double getHours(){ return hours; }
    public String getAccountNo() { return accountNo; }
    public int getFullPay() { return fullPay;}
    public int getPartPay() { return partPay;}
    public double getSalary() { return salary;}


    public void setFullTime(Boolean fTime) {
        this.fullTime = fTime;
    }

    public void setAccountNo(String accountNo) {
        this.accountNo = accountNo;
    }

    public double calculatePay(){
        if (this.fullTime) {
            this.setHours(35);
            salary = fullPay * 35;
        } else if (this.fullTime == false){
            salary = partPay * hours;
        }
        return salary;
    }

    public Boolean changeStatus(){
        if (paid) {
            paid = true;
        }else{
            paid = false;
        }
        return paid;
    }



    











}

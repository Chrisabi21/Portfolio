public class CompanyInvoice implements payable {
    private String payDate;
    private String recipent;
    private double value;
    private Boolean paid;
    
    public CompanyInvoice(){
        paid = false;
    }

    public String getPayDate() { return payDate; }
    public String getRecipent() { return recipent; }
    public double getValue() { return value; }
    public Boolean getPaid() { return paid; }

    public void setPayDate(String payDate) {
        this.payDate = payDate;
    }

    public void setRecipent(String recipent) {
        this.recipent = recipent;
    }

    public void setValue(double value) {
        this.value = value;
    }


    public Boolean changeStatus(){
        if (paid == false) {
            paid = true;
        }else{
            paid = false;
        }
        return paid;
    }
    

}

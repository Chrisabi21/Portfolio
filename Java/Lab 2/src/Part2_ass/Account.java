package Part2_ass;

public class Account {
	private int account_number;
	private double balance;
	private double overdraft;
	
	public Account(int account_no, double bal, double overdr) {
		account_number  = account_no;
		balance = bal;
		overdraft   = overdr;
	}
	
	public void setAccountnumber(int acct_no) {
		account_number = acct_no;
	}
	
	public void setbalance(double bal) {
		balance = bal;
	}
	
	public void setOverdraft(double overd) {
		overdraft = overd;
	}
	
	public int getAccountNumber() { return account_number; }
	
	public double getBalance() { return balance; }
	
	public double getOverdraft() { return overdraft; }
	
	public double withdrawalable() {
		return balance + overdraft;
	}
	
}

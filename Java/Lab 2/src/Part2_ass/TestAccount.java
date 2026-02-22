package Part2_ass;

public class TestAccount {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Account customer1 = new Account(123456, 1200.00, 2000);
		
		System.out.println(customer1.getAccountNumber());
		
		customer1.setAccountnumber(123450);
		customer1.setbalance(2300);
		customer1.setOverdraft(3000);
		
		System.out.println(
				"Your Account number is "+customer1.getAccountNumber()+" , your account balanace is "+ 
				customer1.getBalance()+ ". Available overdraft is "+ customer1.getOverdraft()+
				" and your withdrawable amount is "+customer1.withdrawalable()
		);
		
//		System.out.println(customer1.getBalance());
//		System.out.println(customer1.getOverdraft());
//		System.out.println(customer1.withdrawalable());
		
	}

}

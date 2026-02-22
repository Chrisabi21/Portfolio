package Part3_ass;

public class Loop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int num1 = 10; // Number of characters to print
        char ch = 'A'; // Character to be printed

        for (int i = 0; i < num1; i++) {
            System.out.print(ch);
        }
		
		
		
		// 1. Print Even number from 2 to 10
			System.out.print("1. Print Even number from 2 to 10 = ");
			for(int even = 2; even <= 10; even+=2){
				System.out.print(even+ " ");
			}
			
			System.out.println("\n");
			
		// 2. Print every number from the value in int num down to 1
			System.out.println("2. Print every number from the value in int num down to 1 = ");
			for(int num = 21; num >= 1; num--) {
				System.out.print(num+ " ");
			}
			System.out.println("\n");
			
		// 3. Print 20 asterisks
			System.out.print("3. Print 20 asterisks = ");
			for(int ast = 1; ast <= 20; ast++){
				System.out.print("* ");
			}
			System.out.println("\n");
			
		// 4. Create a String of 20 asterisks
			String asterisk = "";
			for(int ast = 1; ast <= 20; ast++){
				asterisk+="* ";
			}
			System.out.print("4. Create a String of 20 asterisks = " +asterisk);
			System.out.println("\n");
			
		// 6. Count the number of letter ‘A’s in a String s
			String s = "I Am A student in Heriott WAtt university. I study AI.";
			int s_len = s.length();
			int A_count = 0;
			for (int i = 0; i < s_len; i++ ) {
				if(s.charAt(i) == 'A') {
					A_count += 1;
				}
			}
			System.out.println("6. Count the number of letter ‘A’s in a String s = "+A_count);
	}

}

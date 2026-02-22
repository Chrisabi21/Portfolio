package Part1;
import java.util.Scanner;

public class DivideMain {

	public static void main(String[] args) {

                Scanner input = new Scanner(System.in);

                System.out.print("Enter an integer (NOT ZERO!!!):");
                int x = input.nextInt();
                
                System.out.println((100.0 / x));

                System.out.println(((double)100 / x));

                System.out.println((float)100 / x);
                
                System.out.println(100 / x);

                input.close();
	}

}

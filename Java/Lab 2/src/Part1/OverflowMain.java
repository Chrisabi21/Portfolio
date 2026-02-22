// Program designed to trigger an overflow (runtime error).
// On a Linux system, type 
//    java OverflowMain 2> log
// to output the error messages to log.
package Part1;

public class OverflowMain {
      
	public static void main(String[] args) {
                                             // I am main!
                String[] x = new String[5];  // I allocate space for a string! 
                main(x);	             // I recurse (call myself)!
	}

}

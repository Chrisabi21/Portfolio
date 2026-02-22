package Part2_Name2;

//F21SF Lecture 5
public class TestName {

	public static void main(String[] args) {
		
		Name n1= new Name("Jane Jo Jones");
		System.out.println(n1.getFullName());

		Name n2 = new Name("Mary", "Ann", "Smith");
		System.out.println(n2.getFullName());
		
		Name n3 = new Name("Lisa", "Brown");
		System.out.println(n3.getFullName());

                // https://www.geeksforgeeks.org/compare-two-strings-in-java/
                String a1 = new String("Bruce Bannon");
                String a2 = new String("Bruce Bannon");
                System.out.println(a1.equals(a2));  
                System.out.println(a1 == a2);

                // https://www.java67.com/2014/08/difference-between-string-literal-and-new-String-object-Java.html  
                String b1 = "Bruce Bannon";
                String b2 = "Bruce Bannon";
                System.out.println(b1.equals(b2));  
                System.out.println(b1 == b2);
	}
		
}

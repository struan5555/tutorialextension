export function javaInput() {
    return`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Create a Scanner object for user input
        Scanner scanner = new Scanner(System.in);
        
        // Prompt the user for input
        System.out.print("Enter your name: ");
        
        // Read the user's input
        String name = scanner.nextLine();
        
        // Display a greeting message
        System.out.println("Hello, " + name + "!");
        
        // Close the Scanner object
        scanner.close();
    }
}`;
}
export function javaArray() {
    return`public class Main {
    public static void main(String[] args) {
        // Create an array of 5 numbers
        int[] numbers = {10, 20, 30, 40, 50};
        
        // Calculate the sum of the numbers
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }
        
        // Calculate the average of the numbers
        double average = (double) sum / numbers.length;
        
        // Output the numbers in the array
        System.out.println("Numbers in the array:");
        for (int number : numbers) {
            System.out.print(number + " ");
        }
        System.out.println("");
        // Output the sum and average of the numbers
        System.out.println("Sum of numbers: " + sum);
        System.out.println("Average of numbers: " + average);
    }
}`;
}
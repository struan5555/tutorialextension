export function javaMethod() {
    return `public class Main {
    public static void main(String[] args) {
        // Create an array of 5 numbers
        int[] numbers = {10, 20, 30, 40, 50};
        
        // Output the numbers in the array
        System.out.println("Numbers in the array:");
        printArray(numbers);
        
        // Calculate and output the sum of the numbers
        int sum = calculateSum(numbers);
        System.out.println("Sum of numbers: " + sum);
        
        // Calculate and output the average of the numbers
        double average = calculateAverage(numbers);
        System.out.println("Average of numbers: " + average);
    }
    
    // Method to print the elements of an array
    public static void printArray(int[] array) {
        for (int number : array) {
            System.out.print(number + " ");
        }
        System.out.println();
    }
    
    // Method to calculate the sum of the elements in an array
    public static int calculateSum(int[] array) {
        int sum = 0;
        for (int number : array) {
            sum += number;
        }
        return sum;
    }
    
    // Method to calculate the average of the elements in an array
    public static double calculateAverage(int[] array) {
        int sum = calculateSum(array);
        return (double) sum / array.length;
    }
}`;
}
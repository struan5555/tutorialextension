export function PythonArray() {
    return`def main():
    # Prompt the user for input
    numbers = input("Enter a list of numbers separated by spaces: ").split()

    # Convert input strings to integers
    numbers = [int(num) for num in numbers]

    # Calculate the sum
    total = sum(numbers)

    # Calculate the average
    average = total / len(numbers)

    # Find the maximum and minimum
    maximum = max(numbers)
    minimum = min(numbers)

    # Display the results
    print(f"Sum of the numbers: {total}")
    print(f"Average of the numbers: {average}")
    print(f"Maximum number: {maximum}")
    print(f"Minimum number: {minimum}")

if __name__ == "__main__":
    # Execute the main function
    main()
    `;
}
export function PythonTemplate() {
    return`def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

def main():
    # Prompt the user for input
    num = int(input("Enter a number: "))

    # Calculate factorial
    result = factorial(num)

    # Display the result
    print(f"The factorial of {num} is: {result}")

if __name__ == "__main__":
    # Execute the main function
    main()

    `;
}
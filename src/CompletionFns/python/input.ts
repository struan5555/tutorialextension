export function PythonInput() {
    return`def calculate_area(length, width):
    return length * width

def main():
    # Prompt the user for input
    length = float(input("Enter the length of the rectangle: "))
    width = float(input("Enter the width of the rectangle: "))

    # Calculate the area
    area = calculate_area(length, width)

    # Display the result
    print(f"The area of the rectangle with length {length} and width {width} is: {area}")

if __name__ == "__main__":
    # Execute the main function
    main()
    `;
}
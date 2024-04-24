export function PythonClass() {
    return`class Rectangle:
    def __init__(self, length, width):
        # Initialize the length and width of the rectangle
        self.length = length
        self.width = width

    def calculate_area(self):
        # Calculate the area of the rectangle
        return self.length * self.width

    def calculate_perimeter(self):
        # Calculate the perimeter of the rectangle
        return 2 * (self.length + self.width)

def main():
    # Prompt the user for input
    length = float(input("Enter the length of the rectangle: "))
    width = float(input("Enter the width of the rectangle: "))

    # Create a Rectangle object
    rectangle = Rectangle(length, width)

    # Calculate the area and perimeter
    area = rectangle.calculate_area()
    perimeter = rectangle.calculate_perimeter()

    # Display the results
    print(f"The area of the rectangle is: {area}")
    print(f"The perimeter of the rectangle is: {perimeter}")

if __name__ == "__main__":
    # Execute the main function
    main()`;
}
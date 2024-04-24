export function PythonFiles() {
    return`import os

def main():
    # Open the file for writing
    with open('output.txt', 'w') as file:
        # Write some content to the file
        file.write("Hello, world! ")
        file.write("This is a Python script template with file handling.")
        print("This file was created here:", os.getcwd())

    # Open the file for reading
    with open('output.txt', 'r') as file:
        # Read and print the contents of the file
        contents = file.read()
        print("Contents of the file:")
        print(contents)

if __name__ == "__main__":
    # Execute the main function
    main()
    `;
}
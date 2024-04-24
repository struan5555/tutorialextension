export function pythonSnippet() {
    return `class Greeter:
    def __init__(self, names):
        self.names = names

    def greet(self):
        for name in self.names:
            print("Hello, " + name + "!")


def main():
    names = []
    num_people = int(input("Enter the number of people: "))

    for i in range(num_people):
        name = input("Enter the name of person {}: ".format(i + 1))
        names.append(name)

    greeter = Greeter(names)
    greeter.greet()


if __name__ == "__main__":
    main()`;
  }
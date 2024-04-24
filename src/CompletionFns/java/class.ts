export function javaClass() {
    return`// Class Declaration
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}

// Inside the main method or another appropriate location
public class Main {
    public static void main(String[] args) {
        // Object Instantiation
        Person person = new Person("John", 30);
        System.out.println("Person details: " + person.getName() + ", " + person.getAge());
    }
}`;
}
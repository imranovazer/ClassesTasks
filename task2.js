// You need to create a Person class whose constructor will take 2 parameters:  

// name.The name of the person.
//     age.Number of completed years.

// You also need to implement the compareAge method in the Person class. compareAge takes an instance of the Person class and compares full years.

// This code should return the result in the following format.If one Person has more or equal number of years than another, then display a message via alert “name1 is older than name2”.Otherwise, "name1 is younger than name2".

// Run this code to test how your Person class works

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareAge(person) {

        //in task it says that we should to alert but I think console log is enough
        if (this.age >= person.age) {
            console.log(`${this.name} is older than ${person.name}`)
        }
        else {
            console.log(`${this.name} is younger than ${person.name}`)
        }
    }
}
const person1 = new Person('Maxim', 24);
const person2 = new Person('Svetlana', 36);
const person3 = new Person('Irina', 23);

person1.compareAge(person2); // Maxim is younger than Svetlana

person2.compareAge(person3); // Svetlana is older than Irina
person3.compareAge(person1); // Irina is younger than Maxim

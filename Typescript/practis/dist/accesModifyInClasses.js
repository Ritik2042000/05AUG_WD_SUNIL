"use strict";
// there is three accessModifyer
// By Default It is Public
// access to      Parent class   child class   outside class
// 1. Public        Yes             Yes             Yes
// 1. Protected     Yes             Yes             No
// 1. Private       Yes             No              No
// example
class PersonsDetais {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `hello ,my name is ${this.name} my age is ${this.age} and my hobbies is ${this.hobbies.join(",")} `;
    }
    intoHobies() {
        return `${this.hobbies.join(",")}`;
    }
}
class StudentsDetalis extends PersonsDetais {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        // return `${super.introduce()} and my grade is ${this.grade}`;
        return `${this.age}`;
    }
}
const person1Detalis = new PersonsDetais("soham", 23, [
    "coding",
    "running",
]);
// console.log(person1Detalis);
const student1Detalis = new StudentsDetalis("soham", 23, ["coding", "running"], 10);
// in this age is procted we can use this my method inside of child
// using direct dot(.) notesion we can't use it
console.log(student1Detalis.introduce());
// in this private we only use this my parent class
console.log(person1Detalis.intoHobies());

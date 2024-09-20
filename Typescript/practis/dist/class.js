"use strict";
// class are the blueprint of objects
class Persons {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `hello ,my name is ${this.name} my age is ${this.age} and my hobbies is ${this.hobbies.join(',')} `;
    }
}
// inheritance using super() method
class Students extends Persons {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} and my grade is ${this.grade}`;
    }
}
const person1 = new Persons('Mohan', 12, ['music', 'reading']);
const student1 = new Students('Mohan', 12, ['music', 'reading'], 10);
console.log(person1.introduce());
console.log(student1.introduce());

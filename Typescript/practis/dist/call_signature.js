"use strict";
const student = {
    name: "Mohan",
    age: 23,
    gender: "male",
    greet: (country) => `Welcome My Name Is ${student.name} and My Age Is ${student.age} and I Am From  ${country}`,
};
const intoduction = (student) => {
    return `Welcome My Name Is ${student.name} and My Age Is ${student.age}`;
};
console.log(intoduction(student));
console.log(student.greet("India"));

"use strict";
// A tuple is a typed array with a pre-defined length and types for each index.
const personOne = ['Shoam', 25, true];
const personTwo = ['Moham', 15, false];
const displayUserInfo = (person) => {
    console.log(`Name is ${person[0]} whom age is ${person[1]} is Eligible for Driving Licence ${person[2] ? 'Yes' : 'No'} `);
};
console.log(displayUserInfo(personOne));
console.log(displayUserInfo(personTwo));

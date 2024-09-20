"use strict";
// using square method
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers[2]);
// using arry constructor :
const arrayCont = new Array("My", "Name", "is", "Rohan");
console.log(arrayCont[3]);
// using the Array Of method
// const arrayOf:boolean[] = Array.of(true,false)
// console.log(arrayOf[0]);
const fruits = ["apple", "banana", "grapes", "mango"];
const updatedFruits = fruits.push("orange");
console.log(updatedFruits); // here we log push method and it return length of array not the array
const lastData = fruits.pop();
console.log(lastData);
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i],'inside for loop');
// }
// for (const fruit in fruits) {
//   console.log(fruit,'inside for in loop');
// }
// fruits.forEach((data: string) => console.log(data,'inside in forEach loop'));
const arryOfNumbers = [1, 2, 3, 4, 5, 6];
const arryOfNames = [
    "xyzhgcc",
    "qwfdffdssdsdade",
    "rohanandmohan",
    "soham",
    "mohan",
    "anil",
];
const doubleData = arryOfNumbers.map((data) => data * 2);
console.log(doubleData);
const numberToString = arryOfNumbers.map((data) => data.toString());
console.log(numberToString);
const filteredData = arryOfNumbers.filter((data) => data > 3);
console.log(filteredData);
const squreOfNumbers = arryOfNumbers.map((data) => data * data);
console.log(squreOfNumbers);
const capitalNames = arryOfNames.map((data) => data.toUpperCase());
console.log(capitalNames);
const wordWith15length = arryOfNames.filter((data) => data.length > 5);
console.log(wordWith15length);
const fiterNameWithA = arryOfNames.filter((data) => data[0] === "a");
const fiterNameWithA_method2 = arryOfNames.filter((data) => data.startsWith("a"));
console.log(fiterNameWithA);
console.log(fiterNameWithA_method2);

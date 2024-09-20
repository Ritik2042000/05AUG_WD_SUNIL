"use strict";
//@ts-ignore
let firstName = 'hello';
//@ts-ignore
let lastName = 'world';
//@ts-ignore
let fullName = firstName + lastName;
console.log(fullName);
// to check the lenght of data
//@ts-ignore
let sentence = 'lorem ipsum data files';
//@ts-ignore
let lenghtofsentence = sentence.length;
console.log(lenghtofsentence);
// convert into uppercase
let uppercaseText = sentence.toUpperCase();
console.log(uppercaseText);
let str1 = 'ABCD';
let str2 = 'efgh';
// let strEqul = str1.localeCompare(str2)         // -1
// let strEqul = str1 === str2;
let strEqul = str1.toLowerCase() === str2.toLowerCase();
console.log(strEqul); // false
let product = 'Mobile';
let price = 25000;
let productDetalis = `productName is ${product} and price is ${price}/only`;
console.log(productDetalis);

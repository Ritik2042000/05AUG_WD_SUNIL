//@ts-ignore
let firstName:string = 'hello';
//@ts-ignore
let lastName:string =  'world'
//@ts-ignore
let fullName = firstName + lastName
console.log(fullName);

// to check the lenght of data
//@ts-ignore
let sentence:string = 'lorem ipsum data files'
//@ts-ignore
let lenghtofsentence:number = sentence.length
console.log(lenghtofsentence);
// convert into uppercase
let uppercaseText:string = sentence.toUpperCase() 
console.log(uppercaseText);

let str1:string = 'ABCD' ;
let str2:string = 'efgh';
// let strEqul = str1.localeCompare(str2)         // -1
// let strEqul = str1 === str2;
let strEqul = str1.toLowerCase() === str2.toLowerCase();

console.log(strEqul); // false
 
let product:string = 'Mobile';
let price:number = 25000;
let productDetalis = `productName is ${product} and price is ${price}/only`
console.log(productDetalis);

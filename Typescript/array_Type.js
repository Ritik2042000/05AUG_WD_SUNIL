// using square method
var numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers[2]);
// using arry constructor :
var arrayCont = new Array("My", "Name", "is", "Rohan");
console.log(arrayCont[3]);
// using the Array Of method
// const arrayOf:boolean[] = Array.of(true,false)
// console.log(arrayOf[0]);
var fruits = ["apple", "banana", "grapes", "mango"];
var updatedFruits = fruits.push("orange");
console.log(updatedFruits); // here we log push method and it return length of array not the array
var lastData = fruits.pop();
console.log(lastData);
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i],'inside for loop');
// }
// for (const fruit in fruits) {
//   console.log(fruit,'inside for in loop');
// }
// fruits.forEach((data: string) => console.log(data,'inside in forEach loop'));
var arryOfNumbers = [1, 2, 3, 4, 5, 6];
var arryOfNames = ['xyzhgcc', 'qwfdffdssdsdade', 'rohanandmohan', 'soham', 'mohan', 'anil'];
var doubleData = arryOfNumbers.map(function (data) { return data * 2; });
console.log(doubleData);
var numberToString = arryOfNumbers.map(function (data) { return data.toString(); });
console.log(numberToString);
var filteredData = arryOfNumbers.filter(function (data) { return data > 3; });
console.log(filteredData);
var squreOfNumbers = arryOfNumbers.map(function (data) { return data * data; });
console.log(squreOfNumbers);
var capitalNames = arryOfNames.map(function (data) { return data.toUpperCase(); });
console.log(capitalNames);
var wordWith15length = arryOfNames.filter(function (data) { return data.length > 5; });
console.log(wordWith15length);
var fiterNameWithA = arryOfNames.filter(function (data) { return data[0] === 'a'; });
var fiterNameWithA_method2 = arryOfNames.filter(function (data) { return data.startsWith('a'); });
console.log(fiterNameWithA);
console.log(fiterNameWithA_method2);

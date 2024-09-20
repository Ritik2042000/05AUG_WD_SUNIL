// using square method

const numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log(numbers[2]);

// using arry constructor :

const arrayCont: string[] = new Array("My", "Name", "is", "Rohan");
console.log(arrayCont[3]);

// using the Array Of method

// const arrayOf:boolean[] = Array.of(true,false)
// console.log(arrayOf[0]);

const fruits: string[] = ["apple", "banana", "grapes", "mango"];

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

const arryOfNumbers: number[] = [1, 2, 3, 4, 5, 6];
const arryOfNames: string[] = [
  "xyzhgcc",
  "qwfdffdssdsdade",
  "rohanandmohan",
  "soham",
  "mohan",
  "anil",
];

const doubleData: number[] = arryOfNumbers.map((data: number) => data * 2);
console.log(doubleData);

const numberToString: string[] = arryOfNumbers.map((data: number) =>
  data.toString()
);
console.log(numberToString);

const filteredData: number[] = arryOfNumbers.filter((data: number) => data > 3);
console.log(filteredData);

const squreOfNumbers: number[] = arryOfNumbers.map(
  (data: number) => data * data
);
console.log(squreOfNumbers);

const capitalNames: string[] = arryOfNames.map((data: string) =>
  data.toUpperCase()
);
console.log(capitalNames);

const wordWith15length: string[] = arryOfNames.filter(
  (data: string) => data.length > 5
);
console.log(wordWith15length);

const fiterNameWithA = arryOfNames.filter((data: string) => data[0] === "a");
const fiterNameWithA_method2 = arryOfNames.filter((data: string) =>
  data.startsWith("a")
);
console.log(fiterNameWithA);
console.log(fiterNameWithA_method2);

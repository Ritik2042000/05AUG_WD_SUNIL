"use strict";
const func = (name, id) => {
    return `name is ${name} and id is ${id}`;
};
const testfnc = func("test", 32);
console.log(testfnc);
const palindrom = (sentence) => {
    let ispalin = sentence.split("").reverse().join("");
    return ispalin === sentence;
};
const test2 = console.log(palindrom("abcba"));
// avreage the number
const avgNum = (arr) => {
    let total = arr.reduce((accum, inti) => accum + inti, 0);
    return total / arr.length;
};
const test3 = console.log(avgNum([14, 13, 16, 15]));
// find maxValue of array
const findMax = (arr) => {
    return Math.max(...arr);
};
const test4 = console.log(findMax([524, 1236, 4520, 58971]));
// using foreach method
const findMax2 = (arr) => {
    let max = arr[0]; // Initialize the max with the first element
    arr.forEach((data) => {
        if (data > max) {
            max = data; // Update max if the current element is greater
        }
    });
    return max; // Return the max value
};
const test5 = console.log(findMax2([524, 1236, 4520, 58971]));

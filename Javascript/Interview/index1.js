// find the total number of Characte which is repet in word how many times 


const totalNumber = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    totalCount = word.split('').reduce((accum, curElm) => {
        if (curElm === char) {
            accum++
        }
        return accum
    }, 0)

    return totalCount
}


console.log(totalNumber('Ammdedsmmmmcs', 'm'));


// asending orders 
const sortAsendingOrder = (arr) => {
    return arr.sort((a, b) => a - b)
}

// console.log(sortAsendingOrder([8, 5, 2, 7, 1, 4]));

// palindrome

const palindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "")
    let reverseStr = str.split('').reverse().join('')
    return reverseStr == str ? true : false
}

// console.log('ispalindrome', palindrome('racecar'));
// console.log('ispalindrome', palindrome('racecarwms'));

// factorial number 

const factorial = (num) => {
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact = fact * i;

    }
    return fact
}

console.log(factorial(3));
console.log(factorial(4));

const calculateAvgNum = (num) => {
    let AvgNum = num.reduce((accum, curElm) => {
        return accum + curElm
    })
    return AvgNum / num.length
}

console.log(calculateAvgNum([1, 18, 12, 5, 3]));

// check arry have same value or not

const arrEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }

    //every m
    let abc = arr1.every((curElm, index) => curElm === arr2[index])
    return abc
}

console.log(arrEqual([1, 2, 4, 2, 1, 2], [1, 2, 4, 2, 1, 2]));
console.log(arrEqual([1, 2, 4, 2, 1, 2], [1, 2, 4, 1, 1, 2]));

// sum of give number
const sumOfDigit = (num) => {
    let arr = Array.from(String(num), Number)
    let sum = arr.reduce((accum, curElm) => {
        return accum + curElm
    }, 0)
    return sum

}

console.log(sumOfDigit(1245));

// remove duplicate array member 

const removeDuplicate = (arr) => {
    let newArr = [...new Set(arr)]
    return newArr
}

console.log(removeDuplicate([1, 1, 2, 4, 5, 7, 6, 5, 4, 8, 2, 5, 6]));

// check vowel in string

const checkVowel = (str) => {
    str = str.toLowerCase().replace(/\W/g, '').split('')
    // console.log(str);
    vowel = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    let arr = []
    for (const element of str) {
        if (vowel.includes(element)) {
            count++;
            console.log(element, 'inside forof');
            arr.push(element)
        }
    }
    console.log(arr);

    return count
}

console.log(checkVowel('Hellooo Worldd'));

// check the number is power of 2 

const isPowerOfTwo = (num) => {
    let value = false
    for (let i = 1; i < num; i++) {
        if (2 ** i === num) {
            value = true
        }
    }
    return value
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(9));


// calculate arr numbers square total 

const totalNubSqu = (arr) => {
    let total = arr.reduce((accum, curElm) => {
        return accum + (curElm * curElm)
    }, 0)
    return total
}

console.log(totalNubSqu([1, 5, 4, 4, 5, 1]));

// revese the string without built in method

const reverse_Str = (str) => {
    let resStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        resStr = resStr + str[i]
    }
    return resStr
}

console.log(reverse_Str('hello'));

// finr the median

const findMedian = (arr) => {

    let arrSort = arr.sort((a, b) => a - b)

    if (arr.length % 2 === 0) {


    } else {

        return arrSort.reduce((accum, curElm) => accum + curElm, 0) / arr.length
    }

}

console.log(findMedian([1, 5, 4, 8, 6, 2]));
console.log(findMedian([1, 5, 4, 8, 6, 2, 10]));
console.log(findMedian([1, 5, 4, 8]));

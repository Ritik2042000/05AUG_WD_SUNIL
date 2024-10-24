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

// console.log(factorial(3));
// console.log(factorial(4));

const calculateAvgNum = (num) => {
    let AvgNum = num.reduce((accum, curElm) => {
        return accum + curElm
    })
    return AvgNum / num.length
}

// console.log(calculateAvgNum([1, 18, 12, 5, 3]));

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
    // console.log(arrSort);

    let mid = Math.floor(arr.length / 2)

    if (arr.length % 2 === 0) {
        return (arrSort[mid] + arrSort[mid - 1]) / 2

    } else {
        return arrSort[mid]
    }

}

console.log(findMedian([1, 5, 4, 8, 6, 2]));
console.log(findMedian([1, 5, 4, 8, 6, 2, 10]));
console.log(findMedian([1, 5, 4, 8]));


// give the ans how many type given num repeat in array give ans in obj in key give the number which is repted and values as how number repeted    

const number = [1, 2, 3, 4, 4, 1, 5, 6, 7, 8, 9, 8, 7, 2, 1]
// const alpha = ['a','b','c','a','d','e','d','f','g','h','h','i','j','k','i']
let counts = {};
for (const element of number) {
    // in this first set  key and then it value which is undifed so we plus with 1 
    // as key is unique second time when the same numbee came it plus the value of it  
    counts[element] = (counts[element] || 0) + 1
}
console.log(counts)


// find the mode 

const findMode = (arr) => {
    let count = {};
    let maxNumber = 0;
    let mode;
    for (const element of arr) {
        // in this first set  key and then it value which is undifed so we plus with 1 
        // as key is unique second time when the same numbee came it plus the value of it  
        count[element] = (count[element] || 0) + 1;
        if (count[element] > maxNumber) {
            maxNumber = count[element]
            // console.log(maxNumber, 'maxnumber');
            mode = element
        }
    }
    return mode

}

console.log(findMode([1, 2, 3, 4, 4, 1, 4, 4, 4, 5, 6, 7, 8, 9,]))

// factorial using recursive method 
// function has two case  one was base and second was recursive in base can function gave contion to stop the call it self multiple times 

const factorialRecursive = (num) => {
    if (num === 1) {
        return 1
    } else {
        return num * factorialRecursive(num - 1);
    }
}

console.log(factorialRecursive(8));

// fibonacci number 

const fibonacci = (num) => {
    if (num <= 1) {
        return num
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
}

console.log(fibonacci(3));

// write program in which it take two parameters in which it take one string and second is is num resulting that string multify by that number


const repetingStr = (str, num) => {

    // using string built in method
    return num > 0 ? str.repeat(num) : str

    // using recursion function
    // if (num <= 1 ) {
    //     return str
    // }else {
    //     return str + repetingStr(str,num-1)
    // }

}

console.log(repetingStr('hello', 2));


// trunket the string 

const truncateStr = (str, num) => {
    return num <= 0 ? str : str.slice(0, num).concat('...')
}

console.log(truncateStr('A-side b-side c-side ab nmv dfffdvcd', 15));

// numberRange 

const numberRange = (a, b, arr = []) => {
    // using while loop
    // while (a <= b ) {
    //     arr.push(a)
    //     a++
    // }    
    // return arr;

    // using recursion function
    if (a <= b) {
        arr.push(a)
        return numberRange(a + 1, b, arr)
    }
    return arr
}

// console.log(numberRange(0, 5));

// password cheaking fun

const passwordCheker = (pass) => {
    let hasLowercase = false
    let hasUppercase = false;
    let hasNumber = false;


    for (const element of pass) {
        if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) {
            hasUppercase = true
        } else if (element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122) {
            hasLowercase = true
        } else if (!isNaN(Number(element))) {
            hasNumber = true
        }
    }
    if (!hasUppercase || !hasLowercase || !hasNumber || pass.length < 8) {
        return false
    }
    return true
}

// console.log(passwordCheker('amcvdeddl23'));
// console.log(passwordCheker('amcvdeddlA'));
// console.log(passwordCheker('amcvdeddSD45l'));
// console.log(passwordCheker('amc123A'));


// gererate rendom hexacode 

const generateHexa = () => {
    return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`
}
// console.log(generateHexa());
// console.log(generateHexa());
// console.log(generateHexa());

// check objectis empty or not 

const isObjectEmpty = (Obj) => {

    // for (const key in Obj) {
    //     if (Obj.hasOwnProperty(key)) {
    //         return `it's not empty`
    //     }
    // }
    // return `it's empty`

    // with the object inbuilt function 

    return Object.keys(Obj).length === 0 ? `it's empty` : `it's not empty`
}

console.log(isObjectEmpty({ 'hello': 'test1' }));
console.log(isObjectEmpty({ 'key': undefined }));
console.log(isObjectEmpty({}));


// convert the object into array and vice varce arrry to object 

const detalis = {
    name: 'Mohan',
    age: 35,
    city: 'Talod',
    pin: 383215
}

let objToArr = Object.entries(detalis)
console.log(objToArr, 'object convert into array');
let ArrToObj = Object.fromEntries(objToArr)
console.log(ArrToObj, 'Array convert into object');

// find the simpleinterest using 

const calculateSimpleInterest = (price, rate, years) => {
    let amountOfInterest = (price * rate * years) / 100
    return amountOfInterest
}
console.log(calculateSimpleInterest(2000, 12, 5));

// calculate difference between date

const differenceBetDate = (d1, d2) => {
    let date1 = new Date(d1)
    let date2 = new Date(d2)

    let differ = Math.abs(date2 - date1)
    return differ / (24 * 60 * 60 * 1000)
}
console.log(differenceBetDate('2024-05-25', '2024-03-31'));

// make a function find the birthday

const calculateAge = (date) => {
    let todayDate = new Date();
    let birthday = new Date(date)

    let year = todayDate.getFullYear() - birthday.getFullYear()
    let month = todayDate.getMonth() - birthday.getMonth()
    let day = todayDate.getDay() - birthday.getDay()
    if (month < 0 || month === 0 && day < 0) {
        year--
    }

    console.log({ 'year': year, 'month': month, 'day': day });
    return `Your age is ${year}`;
}

console.log(calculateAge('2000-10-22'));


// convert the arr number into * 
const generateBarChart = (arr) => {
    // const newArr = arr.map((curElem,index) => {
    //     let star = '';
    //     let num = 0
    //     while (num < curElem) {
    //         star = star + '*'
    //         num++
    //         // return star
    //     }
    //     return `${index + 1} : ${star}`
    // })
    // return newArr.join('\n')

    // by other method using repeat 

    const newArr = arr.map((curElm, index) => {
        return `${index + 1} : ${'*'.repeat(curElm)}`

    }).join('\n')
    return newArr
}

console.log(generateBarChart([5, 4, 9, 2]));


//convert curret amount into given currency 

const rate = {
    'USD': 1,
    'GBP': 0.77,
    'EUR': 0.92,
    'INR': 84.10,
}
// for convert first we have convert that currency into usd then covert into youcurrecy

const convertAmountInCurreny = (amount, fc, tc) => {
    let amountInUsd = 0;
    if (fc !== 'USD') {
        amountInUsd = amount / rate[fc];
    } else {
        amountInUsd = amount;
    }

    let convertedAmount = 0;
    if (tc !== 'USD') {
        convertedAmount = amountInUsd * rate[tc];
    } else {
        convertedAmount = amountInUsd;
    }
    // console.log(amountInUsd * rate.INR);

    return convertedAmount;
}

console.log(convertAmountInCurreny(100, 'INR', 'GBP'));


// card number validaion function

const cardNumberValidation = (num) => {

    let number = num.replace(/\D/g, '').split('').reverse()
    let doubleNum = number.map((curElm, index) => (index + 1) % 2 === 0 ? curElm * 2 : Number(curElm))
    let makeSingleDigit = doubleNum.map((curElm, index) => curElm > 9 ? curElm - 9 : curElm)
    let total = makeSingleDigit.reduce((accum, curElm) => accum + curElm, 0)
    // console.log(total);
    let isValidNumber = total % 10 === 0 ? true : false
    return isValidNumber

}
console.log(cardNumberValidation('4539 1488 0343 6467'));
console.log(cardNumberValidation('8273 1232 7352 0569'));

// fizzbuzz question in which array value is divided by 3 and 5 print fizzbuzz or only divided by 3 print fizz or divided by 5 print buzz

const fizzbuzz = (firstNum, lastNum) => {
    let arr = []
    for (let i = firstNum; i <= lastNum; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('fizzBuzz')
        } else if (i % 3 === 0) {
            arr.push('fizz')
        } else if (i % 5 === 0) {
            arr.push('buzz')
        } else {
            arr.push(i)
        }
        // arr.push(i)
    }
    return arr
}

console.log(fizzbuzz(1, 15));
console.log(fizzbuzz(12, 25));

// regex (regular expression) function 

const validateEmail = (email) => {
    return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email)
}

console.log(validateEmail('moham@123.com'));
console.log(validateEmail('moham@dummy.com.in'));
console.log(validateEmail('dummy.moham@123.com'));
console.log(validateEmail('@moham@123.com'));

const validatePassword = (pass) => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/.test(pass)
}

console.log(validatePassword('abc123Q$'));
console.log(validatePassword('123Avcsd'));
console.log(validatePassword('abc123Qfsf445'));

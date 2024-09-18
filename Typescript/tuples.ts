// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array


type PersomDetalis = [string,number,boolean]

const personOne: PersomDetalis = ['Shoam',25,true]
const personTwo:PersomDetalis = ['Moham',15,false]

const displayUserInfo = (person:PersomDetalis) => {
     console.log(`Name is ${person[0]} whom age is ${person[1]} is Eligible for Driving Licence ${person[2] ? 'Yes' : 'No'} `);
    
}

console.log(displayUserInfo(personOne));
console.log(displayUserInfo(personTwo));

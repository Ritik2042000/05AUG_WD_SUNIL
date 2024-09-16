// A tuple is a typed array with a pre-defined length and types for each index.
var personOne = ['Shoam', 25, true];
var personTwo = ['Moham', 15, false];
var displayUserInfo = function (person) {
    console.log("Name is ".concat(person[0], " whom age is ").concat(person[1], " is Eligible for Driving Licence ").concat(person[2] ? 'Yes' : 'No', " "));
};
console.log(displayUserInfo(personOne));
console.log(displayUserInfo(personTwo));

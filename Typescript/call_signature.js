var student = {
    name: 'Mohan',
    age: 23,
    gender: 'male',
    greet: function (country) { return "Welcome My Name Is ".concat(student.name, " and My Age Is ").concat(student.age, " and I Am From This ").concat(country); }
};
var intoduction = function (student) {
    return "Welcome My Name Is ".concat(student.name, " and My Age Is ").concat(student.age);
};
console.log(intoduction(student));
console.log(student.greet('India'));

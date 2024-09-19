"use strict";
// in this we pass default value in this function
const fucDef = (name, id = 1) => {
    return `your name is ${name} and id is ${id}`;
};
const testfnc1 = console.log(fucDef("Grammer"));
// in this we pass optional symbol (?) so the it get vaule optional like optional chaining and doesn't give error
const fucOpt = (name, id) => {
    if (id) {
        return `your name is ${name} and id is ${id}`;
    }
    else {
        return `your name is ${name}`;
    }
};
const testfnc2 = console.log(fucOpt('hacker'));
const testfnc3 = console.log(fucOpt('hacker', 89));

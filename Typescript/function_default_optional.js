// in this we pass default value in this function
var fucdef = function (name, id) {
    if (id === void 0) { id = 1; }
    return "your name is ".concat(name, " and id is ").concat(id);
};
var test1 = console.log(fucdef("Grammer"));
// in this we pass optional symbol (?) so the it get vaule optional like optional chaining and doesn't give error
var fucOpt = function (name, id) {
    if (id) {
        return "your name is ".concat(name, " and id is ").concat(id);
    }
    else {
        return "your name is ".concat(name);
    }
};
var test2 = console.log(fucOpt('hacker'));
var test3 = console.log(fucOpt('hacker', 89));

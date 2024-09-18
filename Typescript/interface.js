// TypeScript interfaces define the contracts within your code. They also provide explicit names for type checking.
var personI = {
    name: 'Rohan',
    age: 33
};
var detalisOfUser = function (data) {
    return "User name is ".concat(data.name, " and their age is ").concat(data.age);
};
console.log(detalisOfUser(personI));
var productInfo = {
    name: 'Laptop',
    price: 20000,
    quantity: 20
};
var totalProductPrice = function (data) {
    return "This is ".concat(data.name, " and it total Price is ").concat(data.price * data.quantity);
};
console.log(totalProductPrice(productInfo));

// normal way to assign to typescript
var personData = {
    name: "test1",
    age: 24,
    isStudent: true,
    adress: {
        city: "Gandhinagar",
        country: "India",
    },
};
console.log(personData.age);
console.log(personData.adress.city);
// in this same data like person object so we pass alias person so we can;t have to pass same type
var person2 = {
    name: "test2",
    age: 21,
    isStudent: true,
    adress: { city: "himmatnagar", country: "India" },
};
var productData = {
    name: "Mobile",
    price: 25000,
    quantity: 5,
};
var totalPrice = function (personData) {
    return "".concat(personData.name, " total price is ").concat(personData.price * personData.quantity);
};
console.log(totalPrice(productData));

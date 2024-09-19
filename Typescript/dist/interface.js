"use strict";
// TypeScript interfaces define the contracts within your code. They also provide explicit names for type checking.
const personI = {
    name: 'Rohan',
    age: 33
};
const detalisOfUser = (data) => {
    return `User name is ${data.name} and their age is ${data.age}`;
};
console.log(detalisOfUser(personI));
const productInfo = {
    name: 'Laptop',
    price: 20000,
    quantity: 20
};
const totalProductPrice = (data) => {
    return `This is ${data.name} and it total Price is ${data.price * data.quantity}`;
};
console.log(totalProductPrice(productInfo));

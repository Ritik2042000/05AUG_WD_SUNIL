"use strict";
// setter get one parameter in that properites
// getter hanven't any parameter to it
//The get method doesn't take any parameters, and the set method takes only one parameter.
2; // GETTER & SETTER 4 5 //? In TypeScript classes, you can use getter and setter methods to control the access and modification of class properties. Getter methods allow you to retrieve the value of a property, while setter methods allow you to set the value of a property with additional logic or validation.
class Personss {
    name;
    hobbies;
    _age;
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 150 || age < 0) {
            throw new Error("age is not valid");
        }
        else {
            this._age = age;
        }
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("age is not defined");
        }
        return this._age;
    }
    intoduceParent() {
        return `hello ,my name is ${this.name} my age is ${this.age} and my hobbies is ${this.hobbies.join(",")} `;
    }
}
// Practices
class BankAccount {
    _balance = 0;
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error("Invalid Balance");
        }
        else {
            this._balance = newBalance;
        }
    }
}
const account = new BankAccount();
account.balance = 10;
console.log(account);
// Tempature
class Tempature {
    _celsius = 0;
    get celsius() {
        return this._celsius;
    }
    set celsius(newCelsius) {
        this._celsius = newCelsius;
    }
    get fahrenhit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set fahrenhit(newFan) {
        this._celsius = ((newFan - 32) * 5) / 9;
    }
}
const temp = new Tempature();
temp.celsius = 25;
console.log(temp.fahrenhit);
temp.fahrenhit = 103;
console.log(temp.celsius);

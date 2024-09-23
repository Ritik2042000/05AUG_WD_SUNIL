"use strict";
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculatedArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        console.log(`This circle color is ${this.color} and it radius is ${this.radius}`);
    };
}
const circle = new Circle("red", 5);
console.log(circle.calculatedArea());
circle.displayArea;

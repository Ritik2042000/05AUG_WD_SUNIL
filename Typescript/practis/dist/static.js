"use strict";
// static methods and properties belong to the class itself  rather than instances of the class .By making the methoda and properties static  we can accesss them directly from the class without needing to create an instance of the class. This is  useful for utility function  or properties that don't rely on the instance-specific data.
class MathOpration {
    static PI = Math.PI;
    static add(num1, num2) {
        return num1 + num2;
    }
    static subs(num1, num2) {
        return num1 - num2;
    }
}
console.log(MathOpration.PI);
console.log(MathOpration.add(5, 10));
console.log(MathOpration.subs(25, 17));

// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
// Generics makes it easier to write reusable code.
var logAndReturn = function (value) {
    return value;
};
// at function call we can define the type
console.log(logAndReturn(42));
console.log(logAndReturn("Hello"));
console.log(logAndReturn(true));
/// when function have many parameter we have to pass two or three generix <T,U,V> like this
var add = function (a, b) {
    console.log(a);
    console.log(b);
};
console.log(add('hello', 52));
console.log(add(true, 52));
// console.log();
// Generic Types : 
// Generics is an important feature in TypeScript that enables developers to create reusable code components.
// Generics works with different types instead of a single type.
// In Generics, we are required to write a type parameter between the open < and close > brackets. Further, we use a type variable <T> which the user can define while invoking the type.
// Generics can be applied to the function's argument, function's return type, and, class, fields or methods.
// Union Types:
// A union is an important feature that is used to express a value that can be one of several types.
// TypeScript can merge two different types of data (like a number, string, etc.) into a single type which is further known as union type.
// In Unions, Two or more data types can be combined with the help of a pipe symbol between the types.
// Union types come into the picture when a value can be more than a single type, such as when a property is a string or a number.

"use strict";
// Although intersection and union types are similar, they are employed in completely different ways. An intersection type is a type that merges several kinds into one. This allows you to combine many types to create a single type with all of the properties that you require. An object of this type will have members from all of the types given. The ‘&’ operator is used to create the intersection type.
const employee = {
    name: "Soham",
    age: 23,
    emp_id: 12345,
    department: "It",
};
const myPesonalInfo = {
    name: "Soham",
    age: 23,
};
const user = {
    name: "Mohan",
    age: 21,
};
const myLocation = {
    country: "India",
    city: "Himmatnagar",
};
const createUserProfile = (user, myLocation) => {
    return { ...user, ...myLocation };
};
console.log(createUserProfile(user, myLocation));

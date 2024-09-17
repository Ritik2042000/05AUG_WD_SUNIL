// Although intersection and union types are similar, they are employed in completely different ways. An intersection type is a type that merges several kinds into one. This allows you to combine many types to create a single type with all of the properties that you require. An object of this type will have members from all of the types given. The ‘&’ operator is used to create the intersection type.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var employee = {
    name: "Soham",
    age: 23,
    emp_id: 12345,
    department: "It",
};
var myPesonalInfo = {
    name: "Soham",
    age: 23,
};
var user = {
    name: "Mohan",
    age: 21,
};
var myLocation = {
    country: "India",
    city: "Himmatnagar",
};
var createUserProfile = function (user, myLocation) {
    return __assign(__assign({}, user), myLocation);
};
console.log(createUserProfile(user, myLocation));

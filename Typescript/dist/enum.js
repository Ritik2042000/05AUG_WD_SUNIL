"use strict";
// enum is used for those data(key) who has mamy property roles like we can use in this example
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "Mohan",
    email: "test@mail.com",
    password: "4512dddd",
    role: Roles.admin,
};
const user2 = {
    name: "Rohan",
    email: "user@mail.com",
    password: "dddd4212",
    role: Roles.user,
};
const isAdmin = (user) => {
    return user.role === "admin"
        ? `${user.email} is allowed to make changes in website`
        : `${user.email} is not allowed to make changes in website `;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));

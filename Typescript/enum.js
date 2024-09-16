// enum is used for those data(key) who has mamy property
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "Mohan",
    email: "test@mail.com",
    password: "4512dddd",
    role: Roles.admin,
};
var user2 = {
    name: "Rohan",
    email: "user@mail.com",
    password: "dddd4212",
    role: Roles.user,
};
var isAdmin = function (user) {
    return user.role === "admin"
        ? "".concat(user.email, " is allowed to make changes in website")
        : "".concat(user.email, " is not allowed to make changes in website ");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));

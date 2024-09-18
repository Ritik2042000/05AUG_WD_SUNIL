// Although intersection and union types are similar, they are employed in completely different ways. An intersection type is a type that merges several kinds into one. This allows you to combine many types to create a single type with all of the properties that you require. An object of this type will have members from all of the types given. The ‘&’ operator is used to create the intersection type.

type PersonOne = {
  name: string;
  age: number;
};

type Employee = {
  emp_id: number;
  department: string;
};

type EmployeeDetalis = PersonOne & Employee;

const employee: EmployeeDetalis = {
  name: "Soham",
  age: 23,
  emp_id: 12345,
  department: "It",
};

const myPesonalInfo: PersonOne = {
  name: "Soham",
  age: 23,
};

// second Example of this

type User = {
  name: string;
  age: number;
};

type MyLocation = {
  city: string;
  country: string;
};

const user: User = {
  name: "Mohan",
  age: 21,
};
const myLocation: MyLocation = {
  country: "India",
  city: "Himmatnagar",
};
type UserDetlisOne = User & MyLocation;

const createUserProfile = (
  user: User,
  myLocation: MyLocation
): UserDetlisOne => {
  return { ...user, ...myLocation };
};

console.log(createUserProfile(user, myLocation));

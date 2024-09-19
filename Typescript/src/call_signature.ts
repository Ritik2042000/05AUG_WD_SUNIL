type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string; // this is call signature which is method(function) in the object where only its types define not the whole function
//   (country: string): string; // like this we can write call_signature
};

const student: Student = {
  name: "Mohan",
  age: 23,
  gender: "male",
  greet: (country) =>
    `Welcome My Name Is ${student.name} and My Age Is ${student.age} and I Am From  ${country}`,
};

const intoduction = (student: Student): string => {
  return `Welcome My Name Is ${student.name} and My Age Is ${student.age}`;
};
console.log(intoduction(student));
console.log(student.greet("India"));

// The TypeScript union has the ability to combine one or two different types of data (i.e., number, string, float, double,boolean etc). It is the most powerful way to express a variable with multiple types. Use pipe (‘|’) symbol to combine two or more data types to achieve Union type.

const inputValue = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    throw new Error("This Input Is Invalid");
  }
};

console.log(inputValue(45));
console.log(inputValue("Hello world"));

//
const inputData = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.split(" ").map(data => data.charAt(0).toUpperCase() + data.slice(1)).join(" ");
  } else if (typeof value === "number") {
    return `$${Number(value.toFixed(2))}`;
  } else if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }
};


console.log(inputData('mohit mehta'));
console.log((inputData(56)));
console.log(inputData(true));


type person1 = {
    name:string;
    age:number
}

type Employee1 = {
    emp_id:number;
    department:string
}

type EmployeeDetalis1 = person1 | Employee
 
// like this we can pass both data using unions( | ) in this object we have to pass one type of all property and second type only one property we can add not necssery to write all property     

const employee1:EmployeeDetalis1 = {
    name:'Soham',
    age: 23,
    emp_id:12345,
}
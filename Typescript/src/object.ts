// normal way to assign to typescript
const personData: {
  name: string;
  age: number;
  isStudent: boolean;
  adress: {
    city: string;
    country: string;
  };
} = {
  name: "test1",
  age: 24,
  isStudent: true,
  adress: {
    city: "Gandhinagar",
    country: "India",
  },
};

console.log(personData.age);
console.log(personData.adress.city);

// if we have multiple object we same properties we make type ailes pass it to objects

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  adress: { city: string; country: string };
};

// in this same data like person object so we pass alias person so we can;t have to pass same type
const person2: Person = {
  name: "test2",
  age: 21,
  isStudent: true,
  adress: { city: "himmatnagar", country: "India" },
};

type ProductData = {
  name: string;
  price: number;
  quantity: number;
};

const productData: ProductData = {
  name: "Mobile",
  price: 25000,
  quantity: 5,
};

const totalPrice = (personData: ProductData) => {
  return `${personData.name} total price is ${
    personData.price * personData.quantity
  }`;
};

console.log(totalPrice(productData));

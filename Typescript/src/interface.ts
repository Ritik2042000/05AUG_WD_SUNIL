// TypeScript interfaces define the contracts within your code. They also provide explicit names for type checking.

interface PersonI {
    name:string;
    age:number
}

const personI:PersonI = {
    name:'Rohan',
    age:33
}
const detalisOfUser = (data :PersonI) :string => {
    return `User name is ${data.name} and their age is ${data.age}`
}

console.log(detalisOfUser(personI));


interface ProdectDetalis {
    name:string;
    price:number;
    quantity:number
}

const productInfo ={
    name:'Laptop',
    price:20000,
    quantity:20
}

const totalProductPrice = (data:ProdectDetalis) => {
    return `This is ${data.name} and it total Price is ${data.price * data.quantity}`
}

console.log(totalProductPrice(productInfo));

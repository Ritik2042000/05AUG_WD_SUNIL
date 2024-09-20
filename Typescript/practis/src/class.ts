// class are the blueprint of objects

class Persons {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce():string{
    return `hello ,my name is ${this.name} my age is ${this.age} and my hobbies is ${this.hobbies.join(',')} `
  }

}

// inheritance using super() method

class Students extends Persons {
  grade: number;

  constructor(name:string,age:number,hobbies:string[],grade:number){
    super(name,age,hobbies)
    this.grade = grade
  }

  introduce(): string {
     return `${super.introduce()} and my grade is ${this.grade}`
  }
}


const person1:Persons = new Persons('Mohan',12,['music','reading']); 
const student1:Students = new Students('Mohan',12,['music','reading'],10); 
console.log(person1.introduce());
console.log(student1.introduce());

 

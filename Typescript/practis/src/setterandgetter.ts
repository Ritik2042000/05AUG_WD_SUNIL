// setter get one parameter in that properites
// getter hanven't any parameter to it

2; // GETTER & SETTER 4 5 //? In TypeScript classes, you can use getter and setter methods to control the access and modification of class properties. Getter methods allow you to retrieve the value of a property, while setter methods allow you to set the value of a property with additional logic or validation. 6 7 //TODO The get method doesn't take any parameters, and the set method takes only one parameter.
class Personss {
  private _age: number | undefined;
  constructor(public name: string, protected hobbies: string[]) {}
  public set age(age: number) {
    if (age > 150 || age < 0) {
      throw new Error("age is not valid");
    } else {
      this._age = age;
    }
  }

  public get age() {
    if (this._age === undefined) {
      throw new Error("age is not defined");
    }
    return this._age;
  }

  
  intoduceParent() {
    return `hello ,my name is ${this.name} my age is ${
      this.age
    } and my hobbies is ${this.hobbies.join(",")} `;
  }
}

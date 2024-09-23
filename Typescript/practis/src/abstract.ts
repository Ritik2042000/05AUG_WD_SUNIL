abstract class Shape {
  constructor(protected color: string) {}

  abstract calculatedArea(): number;
  abstract displayArea: () => void;
}

class Circle extends Shape {
  constructor(protected color: string, protected radius: number) {
    super(color);
  }

  public calculatedArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  displayArea = (): void => {
    console.log(
      `This circle color is ${this.color} and it radius is ${this.radius}`
    );
  };
}

const circle = new Circle("red", 5);
console.log(circle.calculatedArea());
circle.displayArea;

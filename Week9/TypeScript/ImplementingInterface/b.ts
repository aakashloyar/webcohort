//abstract class same as interface

abstract class Shape {
    abstract name: string;
  
    abstract calculateArea(): number;
  
    describe(): void {
      console.log(`This shape is a ${this.name} with an area of ${this.calculateArea()} units squared.`);
    }
}

class Rectangle extends Shape{
    name:string;
    constructor(public a: number, public b: number) {
        super();
    }
    calculateArea():number {
        return this.a*this.b
    }
    

}
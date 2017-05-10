
class Vehicle {
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }

  getName () {
    return `Name: ${this.name}`;
  }

  getType () {
    return `Type: ${this.type}`;
  }
}

class Bike extends Vehicle {
 constructor (name) {
    super(name, 'motorbike');
  }

  getName () {
    return `It is a bike: \n${super.getName()}`;
  }
}

class Car extends Vehicle {
 constructor (name) {
    super(name, 'car');
  }

  getName () {
    return `It is a car: \n${super.getName()}`;
  }
}

class Jet extends Vehicle {
 constructor (name) {
    super(name, 'jet');
  }

  getName () {
    return `It is a jet: \n${super.getName()}`;
  }
}

let bike = new Bike('Duke');
console.log(bike.getName());
console.log(bike.getType());

let car = new Car('BMW');
console.log(car.getName());
console.log(car.getType());

let jet = new Jet('Airbus');
console.log(jet.getName());
console.log(jet.getType());
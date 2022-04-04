//Object constructor
class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BmwFactory {
  create(type) {
    if (type === "X5") {
      return new Bmw(type, 10000, 240);
    }
    if (type === "X6") {
      return new Bmw(type, 15000, 280);
    }
  }
}

const factory = new BmwFactory();

const x5 = factory.create("X5");
const x6 = factory.create("X6");

console.log("BMW X5", x5);
console.log("BMW X6", x6);

class CarBase {
  constructor() {
    this.price = 10000;
    this.model = "Car";
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

class Tesla extends CarBase {
  constructor() {
    super();
    this.price = 25000;
    this.model = "Tesla";
  }
}

class Autopilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

class Parktronic {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronik`;
  }
}

const newCar = new Tesla();
const newCarWithAutopilot = new Autopilot(newCar);
const newCarWithAutopilotAndParktronik = new Parktronic(newCarWithAutopilot);

console.log("newCar", newCar.getPrice(), newCar.getDescription());
console.log(
  "newCarWithAutopilot",
  newCarWithAutopilot.getPrice(),
  newCarWithAutopilot.getDescription()
);

console.log(
  "newCarWithAutopilotAndParktronik",
  newCarWithAutopilotAndParktronik.getPrice(),
  newCarWithAutopilotAndParktronik.getDescription()
);

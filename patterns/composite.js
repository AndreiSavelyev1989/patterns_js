class Equipment {
  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }
}

class Engine3 extends Equipment {
  constructor() {
    super();
    this.setName("Engine");
    this.setPrice(800);
  }
}

class Body extends Equipment {
  constructor() {
    super();
    this.setName("Body");
    this.setPrice(3000);
  }
}

class Tools extends Equipment {
  constructor() {
    super();
    this.setName("Tools");
    this.setPrice(4000);
  }
}

class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments
      .map((equipment) => equipment.getPrice())
      .reduce((acc, el) => acc + el);
  }
}

class Car2 extends Composite {
  constructor() {
    super();
    this.setName("Audi");
  }
}

const compositeCar = new Car2();
compositeCar.add(new Engine3());
compositeCar.add(new Body());
compositeCar.add(new Tools());

console.log(`${compositeCar.getName()} price is ${compositeCar.getPrice()}`);

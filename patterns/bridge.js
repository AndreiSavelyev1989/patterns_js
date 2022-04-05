class Model {
  constructor(color) {
    this.color = color;
  }
}

class Color {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class BlackColor extends Color {
  constructor() {
    super("dark-black");
  }
}

class SilbrigColor extends Color {
  constructor() {
    super("silbermetallic");
  }
}

class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`;
  }
}

class Bmw2 extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`;
  }
}

const blackBmw = new Bmw2(new BlackColor());
const silberAudi = new Audi(new SilbrigColor());

console.log("blackBmw: ", blackBmw.paint());
console.log("silberAudi: ", silberAudi.paint());

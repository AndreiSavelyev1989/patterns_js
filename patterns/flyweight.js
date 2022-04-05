class Auto2 {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor(name) {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];
    if (model) return model;
    console.count("model");
    this.models[name] = new Auto2(name);
    return this.models[name];
  }

  getModels() {
    console.table(this.models);
  }
}

const factory2 = new AutoFactory();

const bmw = factory2.create("BMW");
const audi = factory2.create("Audi");
const tesla = factory2.create("Tesla");
const blackTesla = factory2.create("Tesla");

factory2.getModels();

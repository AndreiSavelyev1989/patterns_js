class Engine2 {
  simpleInterface() {
    console.log("Engine 2.0 - tr-tr-tr");
  }
}

class EngineV8 {
  complecatedInterface() {
    console.log("Engine V8! - wroom-wroom!");
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complecatedInterface();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface();
  }
}

//Engine 2.0
const myCar1 = new Auto();
const oldEngine = new Engine2();

myCar1.startEngine(oldEngine);

//Engine V8 with adapter
const myCar2 = new Auto();
const newEngineV8 = new EngineV8Adapter(new EngineV8());

myCar2.startEngine(newEngineV8);

//Engine V8 without adapter
const myCar3 = new Auto();
const engine = new EngineV8();

// myCar3.startEngine(engine); Error!!!

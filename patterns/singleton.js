class Counter {
  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCounter() {
    return this.count;
  }

  increaseCounter() {
    return this.count++;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

counter1.increaseCounter();
counter1.increaseCounter();
counter2.increaseCounter();
counter2.increaseCounter();

console.log("counter1:", counter1.getCounter());
console.log("counter2:", counter2.getCounter());

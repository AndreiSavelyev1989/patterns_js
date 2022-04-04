//Abstract factory
function bmwProducer(kind) {
  return kind === "sport" ? sportCarFactory : familyCarFactory;
}

//Factories
function sportCarFactory() {
  return new Z4();
}

function familyCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    return "Z4 is a sport car!";
  }
}

class I3 {
  info() {
    return "I3 is a family car!";
  }
}

//Initializing Abstract factory of sport cars
const produceSport = bmwProducer("sport");
//Car producting factory
const sportCar = new produceSport();

//Initializing Abstract factory of family cars
const produceFamily = bmwProducer();
const familyCar = new produceFamily();

console.log("Sport car:", sportCar.info());
console.log("Family car:", familyCar.info());

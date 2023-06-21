// let value1 = 1;
// let value2 = value1;

// console.log(value1, value2);

// value1 = 10;

// console.log(value1, value2);

let obj1 = {
  name: "Froddo",
};

// let obj2 = obj1;

// console.log(obj1, obj2);

// obj1 = {
//   name: "Elrond",
// };

// obj1.name = "Elrond";

// console.log(obj1, obj2);

// console.log(Object);

// console.log(obj1);
// console.log(obj1.hasOwnProperty("name"));

// console.log(Array);
// let arr = [1, 2, 3];
// console.log(arr);

function Car(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

Car.prototype.getCarColor = function () {
  return `this car has color of ${this.color}`;
};

const myCar = new Car("fastback", 1967, "red");

const myCar2 = {
  model: "elanor",
  year: 1970,
  color: "blue",
};

// console.log(myCar2);
// console.log(myCar);
// console.log(myCar.getCarColor());
// console.log(myCar.hasOwnProperty("model"));

let animal = {
  legs: 4, //data property
  tail: true, //data property
};

const rabbit = Object.create(animal);

// console.log(rabbit);

const deer = {
  legs: 4,
  tail: true,
  get getDeerHorn() {
    return "deer has horn";
  },
  set setDeerLegs(legs) {
    this.legs = legs;
  },
};

// console.log(deer.getDeerHorn);
// console.log(deer.tail());

deer.setDeerLegs = 2;

// console.log(deer);

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  occupation: "manager",
};

// console.log(user);

const newUser = Object.create(user);
const newUser2 = Object.assign(user);

// console.log(newUser);
// console.log(newUser2);
// hasOwnProperty

const newUserKeys = Object.keys(newUser2);
const newUserValues = Object.values(newUser2);
const newUserData = Object.entries(newUser2);

// console.log(newUserKeys);
// console.log(newUserValues);
// console.log(newUserData);

// user.forEach((element) => {
//   console.log(element);
// });

let arr2 = ["a", "b", "c"];

// for (let digit in user) {
//   console.log(user[digit]);
// }

// for (let digit of arr2) {
//   console.log(digit);
// }

// Object.freeze(user);
// Object.seal(user);

// user.firstName = "";

// user.race = "black";

// console.log(user);

console.log(Object.getOwnPropertyDescriptor(user, "firstName"));

Object.defineProperty(user, "firstName", {
  writable: false,
  enumerable: false,
  configurable: false,
});

// Object.defineProperty(user, "firstName", {
//   writable: true,
// });

user.firstName = "";

console.log(user);

for (let key in user) {
  console.log(key);
}

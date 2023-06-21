const obj1 = {
  fullName: "John Doe",
  age: 30,
  occupation: "gardener",
  address: {
    street: "Linkoln Park",
    state: "Ohio",
  },
  getName: function () {
    return this.name;
  },
};

// let obj2 = obj1;
// console.log(obj2);

// shallow copy and deep copy
// 1 for ... in
// let newObj = {};

// for (let key in obj1) {
//   //   console.log(key);
//   //   console.log(obj1[key]);
//   newObj[key] = obj1[key];
// }

// obj1.fullName = "";
// obj1.address.street = "Suraxani";

// console.log(newObj);

// JSON

// const stringifiedObj = JSON.stringify(obj1);
// const rawObj = JSON.parse(stringifiedObj);

// obj1.address.street = "Suraxani";

// console.log(rawObj);

// const assignedObj = Object.assign(obj1);

// obj1.address.state = "NYC";

// console.log(assignedObj);

const destinationObj = {};

function deepCopy(obj1, destinationObj) {
  for (let key in obj1) {
    if (typeof obj1[key] !== "object") {
      destinationObj[key] = obj1[key];
    } else {
      destinationObj[key] = {};
      deepCopy(obj1[key], destinationObj[key]);
    }
  }
}

// fullName: "John Doe",
// age: 30,
// occupation: "gardener",
// address: {
//   street: "Linkoln Park",
//   state: "Ohio",
// },
// getName: function () {
//   return this.name;
// },

deepCopy(obj1, destinationObj);

obj1.fullName = "";
obj1.address.state = "California";

console.log(destinationObj);

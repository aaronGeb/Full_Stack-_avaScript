let person = {
  name: "Aaron",
  age: 20,
  gender: "Male",
  address: {
    city: "Addis Ababa",
  },
  hobby: ["reading", "Walking", "swimming"],
};
console.log(person.hobby)

// Object manipulation
person.name = "Arun";
console.log(person.name);
person.hobby[2] = "Coding";
person.email = "aaron@gmail.com";
console.log(person)
// Adding a new property
person.country = "Ethiopia";
person.isMarried = false
delete person.address;
console.log(person);
// update the value of a property
person.age = 25;
console.log(person);
// delete a property
delete person.gender;
console.log(person);

// Object destructuring 
let { name, age, address, hobby, email, country, isMarried } = person;
//console.log(name, age, address, hobby, email, country, isMarried);
// Object methods
// Object.keys() - returns an array of the object's keys
let keys = Object.keys(person);
console.log(keys);
// Object.values() - returns an array of the object's values
let values = Object.values(person);
console.log(values);
// Object.entries() - returns an array of the object's key-value pairs
let entries = Object.entries(person);
console.log(entries);


// Object methods and This keyword

const user = {
  name: "Aaron",
  age: 20,
  isMarried: false,
  friends: ["John", "Jane", "Mike"],
  selectColor:null,
  calculateAge: function () {
    return this.age;
  }
  ,
  getName: function () {
    return this.name;
  },
};
console.log(user.calculateAge());
user.name = "Root Aaron"
console.log(user.getName());
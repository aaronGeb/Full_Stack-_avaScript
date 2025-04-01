var root_name = 'John Doe';
console.log(root_name)

// let and const 

const val =  10
//val = 90
console.log(val) // error

let vals =  10
vals = 90
console.log(vals) // 90


// data types

let name = "John Doe";
console.log(typeof name) // string
let age = 30;
console.log(typeof age) // number

let isMarried = false;
console.log(typeof isMarried) // boolean
let color ;
console.log(typeof color) // object

let selected = null
console.log(typeof selected) // object

// objects
let person = {
    name: "John Doe",
    age: 30,
    isMarried: false
}
console.log(typeof person) // object
console.log(person.name)
console.log(person['age'])


//  arrays
let colors = ['red', 'green', 'blue']
console.log(typeof colors) // object
for (let i = 0 ; i < colors.length; i++) {
    console.log(colors[i])
}

// functions

function add(a, b) {
    return a + b
}
console.log(add(10, 20))

function showMyName(name) {
    console.log("My name is:",name )
}
showMyName('Aaron');
// Arrow functions

const sumCal = (a, b) => {
    return a + b
}
console.log(sumCal(10, 20))


// Template literals

let firstName = "John";
let lastName = "Doe";
let age1 = 30;
let isMarried1 = false;
let person1 = {
    firstName,
    lastName,
    age1,
    isMarried1
}
console.log(person1) // { firstName: 'John', lastName: 'Doe', age1: 30, isMarried1: false }
console.log(`My name is ${firstName} ${lastName} and I am ${age1} years old.`) // My name is John Doe and I am 30 years old.
console.log(`Multiply two numbers:${30*3}`)

// Destructuring
let person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isMarried: false
}
let { firstName: fName, lastName: lName, age: a, isMarried: m } = person2
console.log(fName) // John
console.log(lName) // Doe
console.log(a) // 30
console.log(m) // false

// exercise
let person3 = {
  name: "Aaron",
  age: 30,
  isMarried: false,
  homeAddress:{
    city: "Addis Ababa",
    state: "AA",
    country: "Ethiopia"
  },
    hobbies: ["reading", "traveling", "sports"]

};
console.log(('****************'))

console.log(person3)
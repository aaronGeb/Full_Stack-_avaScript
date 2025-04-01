// conditional statement

// if statement
// if (condition) {
//     // do something
// }
// else if (condition) {
//     // do something
// }
// else {
//     // do something
// }

// if else if statement

let age = 18;
if (age < 18) {
  console.log("You are a minor");
} else if (age >= 18 && age < 30) {
  console.log("You are young");
} else {
  console.log("You are old");
}

// switch statement
let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
    break;
}

// ternary operator
let isRaining = true;
let action = isRaining ? "Bring an umbrella" : "Enjoy the sun";
console.log(action);

// exercise-1
/* Write a program that asks the user to enter a number.
 If the number is even, print "Even number".
 If the number is odd, print "Odd number".
 */
let number = 10;
console.log(number % 2 === 0 ? "Even number" : "Odd number");
// exercise-2
// fizzbuzz
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number
// and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
let arr = [];
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    arr.push("FizzBuzz");
  } else if (i % 3 === 0) {
    arr.push("Fizz");
  } else if (i % 5 === 0) {
    arr.push("Buzz");
  } else {
    arr.push(i);
  }
}
console.log(arr);

// Using terner operator
for (let i = 1; i <= 100; i++) {
  let action =
    i % 3 === 0 && i % 5 === 0
      ? "FizzBuzz"
      : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
          ? "Buzz"
          : i;
  console.log(action);
}

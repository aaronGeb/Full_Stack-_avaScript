// for Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// While loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Do while loop
let j = 0;
do {
    console.log(j);
    j++;
}
while (j < 5);

// For... of loop
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}
// For...in loop
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key, obj[key]);
}

// ForEach loop
const array = [1, 2, 3, 4, 5];
array.forEach((num) => {
    console.log(num);
});
// ForEach with index
array.forEach((num, index) => {
    console.log(index, num);
});

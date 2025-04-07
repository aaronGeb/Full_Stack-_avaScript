// strings.js
// This file contains string manipulation functions
// that are used in the application.
// Function to convert a string to uppercase
function toUpperCase(str) {
  return str.toUpperCase();
} 
let country = "USA";
console.log(typeof country);
// Function to convert a string to lowercase
function toLowerCase(str) {
  return str.toLowerCase();
}
// Function to check if a string contains another string
function contains(str, substring) {
  return str.includes(substring);
}
// Function to check if a string starts with another string
function startsWith(str, prefix) {
  return str.startsWith(prefix);
}
// Function to check if a string ends with another string
function endsWith(str, suffix) {
  return str.endsWith(suffix);
}
// Function to get the length of a string
function length(str) {
  return str.length;
}
// Function to get the character at a specific index in a string
function charAt(str, index) {
  return str.charAt(index);
}
// Function to get the substring of a string
function substring(str, start, end) {
  return str.substring(start, end);
}
// Function to split a string into an array of substrings
function split(str, separator) {
  return str.split(separator);
}
// Function to join an array of strings into a single string
function join(arr, separator) {
  return arr.join(separator);
}
// Function to trim whitespace from a string
function trim(str) {
  return str.trim();
}
// Function to replace a substring in a string with another string
function replace(str, search, replacement) {
  return str.replace(search, replacement);
}
// Function to repeat a string a specified number of times
function repeat(str, count) {
  return str.repeat(count);
}
// Function to convert a string to a number
function toNumber(str) {
  return Number(str);
}
// Function to convert a number to a string
function toString(num) {
  return String(num);
}
// Function to check if a string is empty
function isEmpty(str) {
  return str.length === 0;
}
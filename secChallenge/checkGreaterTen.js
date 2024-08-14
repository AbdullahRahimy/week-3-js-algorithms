// Challenge 1: Simple check
// Write a function called checkGreaterTen that takes a number as an argument and checks whether it's greater than 10.
function checkGreaterTen(num1){
    // If the number is greater than 10, return the string "Greater than 10". If not, return the string "Not greater than 10".
    if (num1 > 10) {
        return `${num1} "Greater than 10"`;
    } else {
       return `${num1} "Not greater than 10"`;       
    }
}
// Usage examples:
console.log(checkGreaterTen(15)); // "Greater than 10"
console.log(checkGreaterTen(5)); // "Not greater than 10"
console.log(checkGreaterTen(10)); // "Not greater than 10"
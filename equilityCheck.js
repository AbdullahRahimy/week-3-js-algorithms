function equlityCheck(a, b) {
    if (typeof a !== typeof b) {
        return false;
    }
    return a == b;
}
// function equlityCheck(num1,num2){
//     return num1 === num2;
// }
console.log(equlityCheck(1, true)) // ➞ false. A number and a boolean: the value and type are different
console.log(equlityCheck(0, "0")) // ➞ false. A number and a string: the type is different
console.log(equlityCheck(1, 1)) // ➞ true. A number and a number: the type and value are equal
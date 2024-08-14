// Challenge 9: Traffic Sign
// Write a function called checkSign that accepts the color of a traffic sign ("red", "yellow", "green") as an argument.
// The function should returnStop "" if the sign is red, "Caution" if the sign is yellow, and "Go" if the sign is green.
// Usage examples:
function checkSign(string) {
    if (string == "red") {
        return "Stop"
    } else if(string == "yellow"){
        return "Caution"
    }else if(string == "green"){
        return "Go"
    }else{
        return "Wrong Color"
    }
}
console.log(checkSign("red")); // "Stop"
console.log(checkSign("yellow")); // "Caution"
console.log(checkSign("green")); // "Go"
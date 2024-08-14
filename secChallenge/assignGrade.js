// Challenge 2: Multi-level conditions
// Write a function called assignGrade that takes a number score and assigns a letter grade based on the score.
// The function should return "A" for scores 90 and above, "B" for scores 80 - 89, "C" for scores 70 - 79,
// "D" for scores 60 - 69 and "F" for scores below 60.
function assignGrade(num1) {
  if (num1 >= 90) {
    return "A";
  } else if (num1 >= 80) {
    return "B";
  } else if (num1 >= 70) {
    return "C";
  } else if (num1 >= 60) {
    return "D";
  } else {
    return "F";
  }
}
// Usage examples:
console.log(assignGrade(95)); // "A"
console.log(assignGrade(85)); // "B"
console.log(assignGrade(75)); // "C"
console.log(assignGrade(65)); // "D"
console.log(assignGrade(55)); // "F"
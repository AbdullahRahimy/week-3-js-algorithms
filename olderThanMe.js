// function olderThanMe(str1,num1){
//     const myAge = 33;
//     if (num1>myAge) {
//         return `${str1} is Older than me`;
//     }else if(num1 === myAge){
//        return `${str1} is my age`;
//     }else{
//         return `${str1} is younger than me`;
//     }
// }
// console.log(olderThanMe("Joel", 36)) // ➞ "Joel is older than me."
// console.log(olderThanMe("Samuel", 24)) // ➞ "Samuel is younger than me."
// console.log(olderThanMe("Lily", 28)) // ➞ "Lily is oder than me."
function olderThanMe(Str1, Num1) {
  myAge = 33;
  let result;
  switch (true){
    case Num1 > myAge:
      return `${Str1} is Older than me`;
      break;
    case Num1 === myAge:
      return `${Str1} is my age`;
      break;
    default:
        return `${Str1} is younger than me`;
      break;
  }
  return result;
}
console.log(olderThanMe("Joel", 36)) // ➞ "Joel is older than me."
console.log(olderThanMe("Samuel", 24)) // ➞ "Samuel is younger than me."
console.log(olderThanMe("Lily", 28)) // ➞ "Lily is oder than me."

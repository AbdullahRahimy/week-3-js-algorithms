function stringLongerOne(str1, str2) {
  return str1.length > str2.length ? str1 : str2;
}

console.log(stringLongerOne("codemify", "test"));// codemify
console.log(stringLongerOne("automation", "coding")); // automation
console.log(stringLongerOne("automation", "the codemify")); // the codemify

/*Create a function removeLastChar that takes a string as argument,
and returns the string without the last character.*/



function removeLastChar(string) {
  let newString = string.slice(0, -1);
  return newString;
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'
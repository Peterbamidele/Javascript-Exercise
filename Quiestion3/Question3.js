//  1 - Write a JavaScript program to check two given numbers and return
// true if one of the number is 50 or if their sum is 50.

// Solution
document.write("Question3.js");

const firstNumber = parseInt(prompt("Enter the Value of scalene triangle"));
const secondNumber = parseInt(prompt("Enter the Value of scalene triangle"));
const thirdNumber = parseInt(prompt("Enter the Value of scalene triangle"));


var Permeter =(firstNumber + secondNumber + thirdNumber);
console.log("The Permeter of the scalene triangle",Permeter);

var Area = Math.sqrt(Permeter*((Permeter* firstNumber)*(Permeter*secondNumber)*(Permeter*thirdNumber))) 
console.log("The Area of the Scalane triangle",Area);
co

//  1 - Write a JavaScript program to check two given numbers and return
// true if one of the number is 50 or if their sum is 50.

// Solution
document.write("Question1.js")

const firstNumber = parseInt(prompt("Enter FirstNumber"));
const secondNumber =parseInt(prompt("Enter SecondNumber"));


function twoNumber(firstNumber, secondNumber) 
{
  return ((firstNumber == 50 || secondNumber == 50) || (firstNumber + secondNumber == 50));
}

twoNumber(firstNumber,secondNumber);

console.log("hello world");


    
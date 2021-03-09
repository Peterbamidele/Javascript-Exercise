
// Solution
document.write("Question7.js")

const firstValue =parseInt( prompt("Enter the first Value"));
const SecondValue=parseInt(prompt("Enter the second Value"));

function sumOfTwoIntegers(a, b) {
    let sum = firstValue + SecondValue;
    if (firstValue === SecondValue){
        sum=sum*3
    }

    return sum;
}

console.log(sumOfTwoIntegers(firstValue,SecondValue))
    


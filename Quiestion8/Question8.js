
// Solution
document.write("Question8.js")
const a =parseInt( prompt("Enter the first number of element"));
let integerArray=[3,5,9,1]
function firstElements(array,a) {
    let arrays
    if (a===0){
        a+=1
    }
    arrays=array.slice(0,a)
    return arrays;
}

console.log(firstElements(integerArray,a))
    


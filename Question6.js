
// Solution
document.write("Question6.js")

// const  = parentInt(input("Enter the Value of scalene triangle"))


const first = prompt("Enter the first element");
const second=prompt("Enter the second element");
const third=prompt("Enter the third element")


function rotateElements(first, second, third) {
    let stringArray;
    stringArray=[second,third,first]
    return stringArray;
}

alert(rotateElements(first,second,third))
    



// Solution
document.write("Question10.js")

integerArray=[1,2,3,4,5,6,7,8,9,10]

function sumOfIntegersInTheArray(integerArray, length) {
    let sumOfIntegers = 0;
    for(let count = 0; count<length;count++){
        sumOfIntegers+=integerArray[count]
    }
    return sumOfIntegers
}


function productOfIntegersInTheArray(integerArray, length) {
    let product=1;
    for(let count=0; count<length;count++){
        product*=integerArray[count]
    }
    return product

}

console.log(sumOfIntegersInTheArray(integerArray,integerArray.length))
console.log(productOfIntegersInTheArray(integerArray,integerArray.length))


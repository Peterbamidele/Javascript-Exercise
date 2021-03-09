
// Solution
document.write("Question9.js")

let myColor = ["Red", "Green", "White", "Black"];

function convertArrayToString(myColorArray,arrayLength) {
    let finalOutput=""
    for(let count=0;count<arrayLength;count++){
        finalOutput+=myColor[count]
    }
    return finalOutput

}

console.log(convertArrayToString(myColor,myColor.length))
    


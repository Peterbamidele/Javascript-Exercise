
// Solution
document.write("Question5.js")

// const  = parentInt(input("Enter the Value of scalene triangle"))



const amount1 = parseInt(prompt("Enter Amount1"));
const amount2 = parseInt(prompt("Enter Amount2"));



function charges(amount1 , amount2){

    var subcharge = amount1 + amount2;
    
    
    if (( amount1 <= 10 || amount1 > 10) && (amount2 <=10 || amount2 > 10)) {
    
    return subcharge + 1 ;
   
    
    } else {
    
    return subcharge + 2;
    
    }
    
    }
    var addsubcharge=charges(amount1,amount2)
    console.log("Amount One", amount1);
    console.log("Amount Two", amount2);
    console.log(addsubcharge)

const bread =parseInt( prompt("Enter the number of slices of bread"));
const cheese=parseInt( prompt("Enter the number of slices of cheese"));

function possibleSandwiches(bread) {
    let integer=0
    integer=bread/2
    return integer

}

console.log(possibleSandwiches(bread))

function possibleSandwichesWithCheese(bread, cheese) {
    let integers = 0;
    let possibleSandwichesBreadOnly=0
    possibleSandwichesBreadOnly=possibleSandwiches(bread)

    if(possibleSandwichesBreadOnly>1)
    {
    if(possibleSandwichesBreadOnly > cheese)
    {
        possibleSandwichesBreadOnly = cheese
    }
    if(possibleSandwichesBreadOnly<cheese){
    }
    if(possibleSandwichesBreadOnly === cheese){
        possibleSandwichesBreadOnly = cheese
    }
    }
    return possibleSandwichesBreadOnly;
}

console.log(possibleSandwichesWithCheese(bread,cheese))

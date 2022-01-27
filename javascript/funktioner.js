//Function expression
//hoistas ej

console.log(addNumbers(3, 4))
console.log(addTwoNumbers(3, 4))

const addTwoNumbers = function (a, b) {
    return a + b
}

//Function declarations
//Hoistas

function addNumbers (a, b) {
    return a + b
}

//Arrow functions

const addAnyNumbers = (a, b) => {
    return a + b
}

const addAnyNumbersShort = (a, b) => a + b

function printNumbers (a, b) {
    console.log (a, b)
}
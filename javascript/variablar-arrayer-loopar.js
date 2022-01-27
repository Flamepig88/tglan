// Primitiva Variablar
// const eller let (es6) - var är gammaldags(es5) 

const age = 17 //Datatyp = Number (andra språk, integer)
const num = 18.34 //Datatyp = Number (andra språk double, float)

const name = "Rabi" // Datatyp = String (samma i alla språk)
const letter = "s" // Datatyp = String (andra språk, "char")

const isOfLegalAge = true // Datatyp = Boolean (samma i alla språk)

const wife = {
    name: "Link",
    age: "16"
}

// ---------------------------------------------OBJEkt-------------------------------------------------------------------------

// Object literals är det som används i JS
const character = {
    name: "Zelda",
    level: "12",
    wife, // När egenskap och värde är döpta samma, behövs inte båda skrivas ut
}

const newCharacter = {
    name: "Zelda",
    level: "12",
    wife, // När egenskap och värde är döpta samma, behövs inte båda skrivas ut
}

let name2 = "Chrissy"
let newName = "Chrissy"

// isEqual (name2 === newName) // === true
// isEqual (character === newCharacter) // === false

let myCharacter = character
// isEqual (myCharacter === character) // === true

character.name = "Idiot"


// ---------------------------------------------ARRAYER----------------------------------------------------------------------

// Index        0       1       2       3
const games = ["Wow", "Lol", "Zelda", "Fifa"]

// Antal element = 4
console.log ("Length", games.length) //4

// Sista index i en array = arrayens längd - 1
const lastIndex = games.length -1
console.log ("lastIndex", lastIndex) // 3

//Sista element i arrayen
console.log("Last element: ", games[lastIndex])

//Arrayer med objekt 

const realGames = [
    { title: "Fifa", price: "467", sale: false },
    { title: "Wow", price: "348", sale: true }, 
    { title: "Lol", price: "489", sale: false },
    { title: "OW", price: "489", sale: true }
]

// ----------------------------------------- LOOPAR ------------------------------------------------------------------------------

//While
//doWhile
//Traditionell for loop
for (let i = 0; i < games.length; i++) {
    console.log(games[i])
}

//for of (for in för objekt)
for (let game of games) {
    console.log(game)
}

//forEach
games.forEach(function(game, index) { //Callback funktion
    console.log(game)
})
games.forEach((game, index) => {
    console.log(game)
})


//find
//1. Uppgift: hitta första bästa spel i listan realGames som är på rea. 

let gameOnSale
for (let i = 0; i < realGames.length; i++) {
    if(realGames[i].sale === true) {
        gameOnSale = realGames[i]
    }
}

console.log("Game On Sale: ", gameOnSale)


let firstGameOnSale = realGames.find(function(game) {
   //let isOnSale = game.sale
    //return isOnSale
    return game.sale
})

let aGameOnSale = realGames.find(game => game.sale)

console.log ("First game on sale: ", aGameOnSale)

console.log("First game on sale: ", firstGameOnSale)

//filter

const gamesOnSale = realGames.filter(game => game.sale)

const filteredGames = []
for (let game of realGames) {
    if(!game.sale) {
        filteredGames.push(game)
    }
}

console.log (gamesOnSale)
console.log("filtered games: ", filteredGames
)

//map
//reduce
//findIndex
// Hämta enstaka element

// ----- getElementById -----

const divContainer = document.getElementById("container")

// console.log(divContainer)


// ----- querySelector -----

const div = document.querySelector("#container")
const sameDiv = document.querySelector("div")

console.log(sameDiv)
console.log(div)

// ----------------------------------Hämta flera element-----------------------------------------

// ----- getElementsByTagName ----- returnerar HTMLCollection

const divs = document.getElementsByTagName("div")
console.log(divs)

// ----- getElementsByClassName ----- returnerar HTMLCollection

const divsWithClass = document.getElementsByClassName("divs")
console.log(divsWithClass)

// ----- querySelectorAll ----- return NodeList

const divsWithQuerySelectorAll = document.querySelector("div.divs#container")

console.log(divsWithQuerySelectorAll)

divContainer.addEventListener("mouseenter", e => {
    e.target.innerText = "Hallå där"
})

divContainer.addEventListener("mouseleave", e => {
    e.target.innerText = "DIV"
})
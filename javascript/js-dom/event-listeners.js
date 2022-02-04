// const btn = document.querySelector("#btn")
const bookListContainer = document.querySelector("#book-list")
const bookForm = document.querySelector("#book-form")
const bookTitleElement = document.querySelector("#book-title")

bookForm.addEventListener("submit", e => {
    e.preventDefault()
    console.log("Formuläret skickades...")
    // console.log(e.target.elements.title.value)
    console.log(bookTitleElement.value)
    const pEl = generateListElementDOM(bookTitleElement.value)
    bookListContainer.appendChild(pEl)

    bookTitleElement.value = ""
})

function generateListElementDOM(text) {
    const pEl = document.createElement("p")
    pEl.innerText = text
    return pEl
}

document.addEventListener("keydown", e => {
    console.log(e.key)
})

// btn.addEventListener("click", () => {
//     container.innerText = "Nej"
// })
const container = document.querySelector("#container")

// Skapa nya element
const linkEl = document.createElement("a")

// Ge element textinnehåll (Finns fler liknande varianter)
linkEl.textContent = "Gå till Google.com"
linkEl.innerText = "Besök Google.com"

// Ge element olika attribut
linkEl.setAttribute("href", "https://www.google.com")

// Lägg till i DOM:en
// Om det finns flera barn. läggs den till sist i listan av barnen.
container.appendChild(linkEl)

// Lägga till CSS klasser
linkEl.classList = "link"

document.querySelector("#container").innerHTML = 
"<a href='https://google.com'>Besök här!</a>"


// container.querySelector("#para").className = "para"
// console.log(container.children[0].childNodes)
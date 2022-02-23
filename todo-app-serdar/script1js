// Arrayer
const todos = [
  { text: 'Städa rummet', completed: false },
  { text: 'Utklassa Beni i Fortnite', completed: true },
  { text: 'Skicka Beni en chokladask', completed: false },
  { text: 'Tvätta bilen', completed: false },
]

// Variablar
const todosContainer = document.querySelector('#todos-container')
const todosForm = document.querySelector('#todos-form')

// Hjälpmetod som returnerar DOM:en för en todo
function generateTodoDOM(todo) {
  // TODO: Skapa cherckbox och lägg till event-lyssnare på den
  // TODO: Skapa knapp för att ta bort en todo

  const li = document.createElement('li')
  li.textContent = todo.text
  return li
}

// Hjälpfunktion som returnerar en sammanfattning av hur många todos användaren har kvar att genomföra
function generateTodoSummary(todos) {
  // Kortaste sättet: arrow funciton + implicit return
  // const incompleteTodos = todos.filter(todo => todo === !todo.completed)

  // Näst kortaste: arrow function + explicit return
  // const incompleteTodos = todos.filter(todo => {
  //   return !todo.completed
  // })

  // Längsta sättet: vanlig funktion + explicit return
  const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
  })
  console.log(incompleteTodos)
}

// Renderar DOM:en för alla dynammiska delar i appen
function renderTodos(todos) {
  todosContainer.innerHTML = ''
  todos.forEach(todo => {
    const todoDOM = generateTodoDOM(todo)
    todosContainer.appendChild(todoDOM)
  })
}

// När man trycker på "submit" så kommer den inte ladda om sidan, men den kommer att lägga ut det man har skrivit i rutan i slutet av listan. 
todosForm.addEventListener('submit', event => {
  event.preventDefault()
  const input = document.querySelector('#todo-text')
  todos.push({ text: input.value, completed: false })
  input.value = ''
  renderTodos(todos)
})

// Den visar all text
renderTodos(todos)

generateTodoSummary (todos)

// let highNumbers = []
// let numbers = [3, 5, 7, 1, 10]
// for (number of numbers) {
//   if (number >= 5) {
//     highNumbers.push(number)
//   }
// }

// // const filterHigh = numbers.filter(number => number >= 5)
// const filterHigh = numbers.filter(function (number) {
//   return number >= 5
// })
// console.log(filterHigh)
// console.log(highNumbers)
const todos = [
  { text: 'Städa rummet', completed: false },
  { text: 'Utklassa Beni i Fortnite', completed: true },
  { text: 'Skicka Beni en chokladask', completed: false },
  { text: 'Tvätta bilen', completed: false },
]

//Hjälpfunktion som returnerar DOM:en för en todo
function generateTodoDOM(todo) {
  //TODO: skapa checkbox och lägg till event-lyssnare på den
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed
  checkbox.addEventListener('change', e => {

    // e.target.checked ? (todo.completed = true) : (todo.completed = false)

    if (e.target.checked) {
      todo.completed = true
    } else {
      todo.completed = false
    }
  })


  //TODO: Skapa knapp för att ta bort en todo

  const span = document.createElement('span')
  span.innerText = todo.text
  const li = document.createElement('li')
  li.appendChild(checkbox)
  li.appendChild(span)
  return li
}

//Hjälpfunktion som returnerar en sammanfattning av hur
//många todos användaren har kvar att genomföra.

function generateTodoSummary(todos) {

  const todoSummary = document.querySelector('#todo-summary')
  //Kortaste sättet: arrow function + implicit return
  // const incompletedTodos = todos.filter(todo => !todo.completed)

  //Näst kortaste: arrow function + explicit return
  // const incompleteTodos = todos.filter(todo => {
  //   return !todo.completed
  // })

  //Längsta sättet: vanlig funktion + explicit return
  const incompletedTodos = todos.filter(function (todo) {
    return !todo.completed
  })

  todoSummary.innerText = `Du har ${incompletedTodos.length} kvar att göra`

  // const h2 = document.createElement('h2')
  // h2.textContent = incompletedTodos.text ('Du har' + incompletedTodos + 'kvar att göra')
  // return h2
}

//Renderar DOM:en för alla dynamiska delar i appen
function renderTodos(todos) {
  generateTodoSummary(todos)
  const todosContainer = document.querySelector('#todos-container')
  todosContainer.innerHTML = ''
  todos.forEach(todo => {
    const todoDOM = generateTodoDOM(todo)
    todosContainer.appendChild(todoDOM)
  })
}

//Appen
document.querySelector('#todos-form').addEventListener('submit', event => {
  event.preventDefault()
  const input = document.querySelector('#todo-text')
  todos.push({ text: input.value, completed: false, id: uuidv4() })
  input.value = ''
  renderTodos(todos)
})

renderTodos(todos)

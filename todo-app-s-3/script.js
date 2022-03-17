  // Localstorage
  let todos = JSON.parse(localStorage.getItem('todos')) || []

  function saveTodos(todoList) {
  localStorage.setItem('todos', JSON.stringify(todoList))
  renderTodos(todoList)
  }

  //Hjälpfunktion som returnerar DOM:en för en todo
  function generateTodoDOM(todo) {

  //Checkbox
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed

  checkbox.addEventListener('change', e => {

  //Ternary operator
  // e.target.checked ? (todo.completed = true) : (todo.completed = false)

  if (e.target.checked) {
  todo.completed = true
  } else {
  todo.completed = false
  }
  saveTodos(todos)
  })

  // LÄGG TILL BILD
  const image_btn = document.querySelector("#image_btn");
  image_btn.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
  const uploaded_image = reader.result;
  document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
  });
   reader.readAsDataURL(this.files[0]);
  });

  // LÄGG TILL BILD
  const image_btn2 = document.querySelector("#image_btn2");
  image_btn2.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
  const uploaded_image = reader.result;
  document.querySelector("#display_image2").style.backgroundImage = `url(${uploaded_image})`;
  });
   reader.readAsDataURL(this.files[0]);
  });

  //Ta bort en todo
  const button = document.createElement('button')
  button.innerText = 'x'
  button.classList.add('btn')

  button.addEventListener('click', e => {
  todos = todos.filter(todoItem => {
  return todoItem.id !== todo.id
  })
  saveTodos(todos)
  renderTodos(todos)
  })

  const span = document.createElement('span')
  span.innerText = todo.text

  const li = document.createElement('li')

  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(button)

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
  const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
  })

  //X = antal element i arrayen incompletedTodos
  // <h2>Du har X todos kvar att genomföra.</h2>

  todoSummary.innerText = `Du har ${incompleteTodos.length} todos kvar att genomföra`
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
  saveTodos(todos)
  input.value = ''
  renderTodos(todos)
})

  renderTodos(todos)

const todos = [
  // { text: "Städa rummet", completed: false },
  // { text: "Utklassa Beni i Fortnite", completed: true },
  // { text: "Skicka Beni en chokladask", completed: false },
  // { text: "Tvätta bilen", completed: false },
];

const todosContainer = document.querySelector("#todos-container");
const todosForm = document.querySelector("#todos-form");

//Hjälpfunktion som returnerar DOM:en för en todo
function generateTodoDOM(todo) {
  //TODO: skapa checkbox och lägg till event-lyssnare på den
  //TODO: Skapa knapp för att ta bort en todo

  const p = document.createElement("p");
  p.textContent = todo.text;
  return p;
}

//Hjälpfunktion som returnerar en sammanfattning av hur
//många todos användaren har kvar att genomföra.

function generateTodoSummary(todos) {
  //Kortaste sättet: arrow function + implicit return
  // const incompletedTodos = todos.filter(todo => !todo.completed)

  //Näst kortaste: arrow function + explicit return
  // const incompleteTodos = todos.filter(todo => {
  //   return !todo.completed
  // })

  //Längsta sättet: vanlig funktion + explicit return
  const incompletedTodos = todos.filter(function (todo) {
    return !todo.completed;
  });

  console.log(incompletedTodos);
}

//Renderar DOM:en för alla dynamiska delar i appen
function renderTodos(todos) {
  todosContainer.innerHTML = "";
  todos.forEach((todo) => {
    const todoDOM = generateTodoDOM(todo);
    todosContainer.appendChild(todoDOM);
  });
}

//Appen
todosForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#fname");
  todos.push({ text: input.value, completed: false });
  input.value = "";
  renderTodos(todos);
});

todosForm.addEventListener("submit", (event) => {
  const input = document.querySelector("#lname");
  todos.push({ text: input.value, completed: false });
  input.value = "";
  renderTodos(todos);
});

renderTodos(todos);
generateTodoSummary(todos);

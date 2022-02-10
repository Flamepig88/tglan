const todos = [
    {text: "Städa rummet", completed: false},
    {text: "Utklassa Beni i Fortnite", completed: true},
    {text: "Skicka Beni en chokladask", completed: false},
    {text: "Tvätta bilen", completed: false},
]

const todosContainer = document.querySelector('#todos-container')
const todosForm = document.querySelector("#todos-form")

// todos.forEach(function(todo) {
//     const li = document.createElement('li')
//     li.textContent = todo.text
//     todosContainer.appendChild(li)
// })

renderTodos(todos)

todosForm.addEventListener("submit", (event) => {
    // const li = document.createElement("li");
    event.preventDefault()
    const todoText = document.querySelector("#todo-text").value;
    // todos.push({ text: todoText, completed: false});
    // li.textContent = todoText;
    // todosContainer.appendChild(li);
    todos.push({text: Input.value, completed: false})
    input.value = ""
    renderTodos(todos)
})

function renderTodos(todos) {
    todos.forEach(function(todo) {
        const li = document.createElement('li')
        li.textContent = todo.text
        todosContainer.appendChild(li)
    })
}

// Loopa igenom listan med todos
// Skapa ett dom element (li)
// Lägg till todons text i li elementet
//Localstorage
todos = JSON.parse(localStorage.getItem("todos")) || [];

const todoForm = document.querySelector(".todo-form");

//Todo formulär
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = {
    content: e.target.elements.content.value,
    klar: false,
  };

  todos.push(todo);

  //Localstorage
  localStorage.setItem("todos", JSON.stringify(todos));

  // Töm input fältet efter att man har skapat en todo
  e.target.reset();

  // Visa todos
  createTodo();
});

createTodo();

function createTodo() {
  const todoLista = document.querySelector("#todos");
  todoLista.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const etikett = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const knappar = document.createElement("div");
    const ändra = document.createElement("button");
    const taBort = document.createElement("button");

    input.type = "checkbox";
    input.checked = todo.klar;
    span.classList.add("markering");
    content.classList.add("todo-content");
    knappar.classList.add("knappar");
    ändra.classList.add("ändra");
    taBort.classList.add("tabort");

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    ändra.innerHTML = "Ändra";
    taBort.innerHTML = "X";

    etikett.appendChild(input);
    etikett.appendChild(span);
    knappar.appendChild(ändra);
    knappar.appendChild(taBort);
    todoItem.appendChild(etikett);
    todoItem.appendChild(content);
    todoItem.appendChild(knappar);

    todoLista.appendChild(todoItem);

    if (todo.klar) {
      todoItem.classList.add("klar");
    }

    input.addEventListener("change", (e) => {
      todo.klar = e.target.checked;
      localStorage.setItem("todos", JSON.stringify(todos));

      if (todo.klar) {
        todoItem.classList.add("klar");
      } else {
        todoItem.classList.remove("klar");
      }

      createTodo();
    });

    ändra.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        createTodo();
      });
    });

    taBort.addEventListener("click", (e) => {
      todos = todos.filter((t) => t != todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      createTodo();
    });
  });
}

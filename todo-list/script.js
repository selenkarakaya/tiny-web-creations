const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");

    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    // Create a span or p for the text
    const textEl = document.createElement("span");
    textEl.innerText = todoText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";

    // Delete action
    deleteBtn.addEventListener("click", (e) => {
      //e.stopPropagation(); // prevent li click from toggling 'completed'
      todoEl.remove();
    });

    // Toggle completed when li is clicked
    todoEl.addEventListener("click", () =>
      textEl.classList.toggle("completed")
    );

    // Append both
    todoEl.appendChild(textEl);
    todoEl.appendChild(deleteBtn);
    todos.appendChild(todoEl);

    input.value = "";
  }
}

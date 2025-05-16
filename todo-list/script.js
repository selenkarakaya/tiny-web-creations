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

    // Text elemanı (span veya p)
    const textEl = document.createElement("span");
    textEl.innerText = todoText;

    // Silme butonu
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // completed toggle olmasın
      todoEl.remove();
    });

    // Tamamlandı toggle
    todoEl.addEventListener("click", () =>
      textEl.classList.toggle("completed")
    );

    // Elemanları li içine ekle
    todoEl.appendChild(textEl);
    todoEl.appendChild(deleteBtn);

    // li'yi ul'ye ekle
    todos.appendChild(todoEl);

    // input'u temizle
    input.value = "";
  }
}

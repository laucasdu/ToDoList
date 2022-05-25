import { todoList } from "./todoList.js";

document.getElementById('addButton').addEventListener('click', () => {
    todoList.addTodo(todoInput.value);
    todoInput.value = "";
});

todoList.render();




// Event Listeners

const form = document.querySelector("#todo-form");
const list = document.querySelector("#list");
const input = document.querySelector("#new-todo");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // create list item
  const listItem = document.createElement("li");

  // add input to list item
  const inputValue = input.value;
  listItem.innerText = inputValue;

  // delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(deleteButton);

  list.appendChild(listItem);
});

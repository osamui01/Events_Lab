// Event Listeners

const form = document.querySelector("#todo-form");

const list = document.querySelector("#list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // create list item
  const listItem1 = document.createElement("li");
  listItem1.innerText = "List item 1";

  list.appendChild(listItem1);
});

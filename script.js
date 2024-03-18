// Event Listeners

const form = document.querySelector("#todo-form");
const list = document.querySelector("#list");
const input = document.querySelector("#new-todo");
const button = document.querySelector("#date");
const completedList = document.querySelector("#completed-list");

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

  // checkbox
  const itemCheckbox = document.createElement("input");
  itemCheckbox.type = "checkbox";

  itemCheckbox.addEventListener("change", () => {
    if (itemCheckbox.checked) {
      listItem.style.color = "#808080";
      list.removeChild(listItem);
      completedList.appendChild(listItem);
    } else {
      listItem.style.color = "#000";
      completedList.removeChild(listItem);
      list.appendChild(listItem);
    }
  });

  listItem.appendChild(deleteButton);

  listItem.appendChild(itemCheckbox);

  list.appendChild(listItem);

  // Clear input after event
  input.value = "";
});

button.addEventListener("click", (event) => {
  event.preventDefault();

  const dateDisplayer = document.querySelector("#show-date");

  const todaysDate = new Date();
  dateDisplayer.innerText = "Today's date is: " + todaysDate;
});

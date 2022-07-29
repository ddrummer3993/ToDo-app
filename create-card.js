import {
  handleDOMLoad,
  handleTaskDelete,
  handleTaskEdit,
} from "./CRUD-funcs.js";

// When the "Add To List" button is clicked, a new list item is populated on the left container
export function createTask(taskObj) {
  const li = document.createElement("div");
  li.setAttribute("id", taskObj._id);
  li.classList.add("taskCard");
  const inputValue = taskObj.task;
  const sym = document.createElement("span");
  sym.innerText = inputValue;
  li.appendChild(sym);
  if (inputValue === "") {
    alert("Nothing has been added. Check your entry.");
  } else {
    document.getElementById("todo-list").appendChild(li);
  }
  document.getElementById("userInput").value = "";

  //create edit button
  const editButton = document.createElement("button");
  editButton.className = "edit";
  editButton.innerText = "Edit";
  editButton.addEventListener("click", handleEditButton);
  //li.appendChild(editButton);

  //creates delete button
  const deleteButton = document.createElement("button");
  const txt = document.createTextNode("\u2715");
  deleteButton.className = "delete";
  deleteButton.addEventListener("click", handleDOMDelete);
  deleteButton.appendChild(txt);
  //li.appendChild(deleteButton);

  const btnContainer = document.createElement("span");
  btnContainer.classList.add("btnContainer");
  btnContainer.appendChild(editButton);
  btnContainer.appendChild(deleteButton);
  li.appendChild(btnContainer);
}

function handleDOMDelete(eventObj) {
  //remove from mongoDB
  let taskID = eventObj.target.parentElement.parentElement.id;
  console.log(taskID);
  handleTaskDelete(taskID);

  //remove from list
  const removeButton = eventObj.target;
  const container = removeButton.parentElement.parentElement;
  container.remove();
}

function handleEditButton(eventObj) {
  let edit = prompt("how would you like to change your task?");

  //edit MongoDB
  let taskID = eventObj.target.parentElement.id;
  console.log(taskID);
  handleTaskEdit(taskID, edit);
  eventObj.target.parentElement.parentElement.children[0].innerText = edit;
}

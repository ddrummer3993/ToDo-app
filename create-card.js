/*
// Creating a "delete" button and appending it to each list item
const myDelBtn = document.getElementsByTagName("li");
var i;
for (i = 0; i < myDelBtn.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u2715");
  span.className = "delete";
  span.appendChild(txt);
  myDelBtn[i].appendChild(span);
}

// Clicking the delete button to get rid of the current list item
const delItem = document.getElementsByClassName("delete");
var i;
for (i = 0; i < delItem.length; i++) {
  delItem[i].onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
}

// Adding a "checked" symbol when a ToDo is clicked
const list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (evtObj) {
    if (evtObj.target.tagName === "li") {
      evtObj.target.classList.toggle("checked");
    }
  },
  false
);
*/

// When the "Add To List" button is clicked, a new list item is populated on the left container
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("userInput").value;
  const sym = document.createTextNode(inputValue);
  li.appendChild(sym);
  if (inputValue === "") {
    alert("Nothing has been added. Check your entry.");
  } else {
    document.getElementById("todo-list").appendChild(li);
  }
  document.getElementById("userInput").value = "";

  const span = document.createElement("span");
  const txt = document.createTextNode("\u2715");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    };
  }
}

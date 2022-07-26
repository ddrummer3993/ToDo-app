// Adding a "checked" symbol when a ToDo is clicked
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (evtObj) {
    if (evtObj.target.tagName === "li") {
      evtObj.target.classList.toggle("checked");
    }
  },
  false
);

// Creating a "delete" button and appending it to each list item
var myDelBtn = document.getElementsByTagName("li");
var i;
for (i = 0; i < myDelBtn.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u2715");
  span.className = "delete";
  span.appendChild(txt);
  myDelBtn[i].appendChild(span);
}

// Clicking the delete button to get rid of the current list item
var close = document.getElementsByClassName("delete");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// When the "Add To List" button is clicked, a new list item is populated on the left container
function newElement() {
  var li = document.createElement("li");
  var todoValue = document.getElementById("to_dos").value;
  var sym = document.createTextNode(todoValue);
  li.appendChild(sym);
  if (todoValue === "") {
    alert("Nothing has been added. Check your entry.");
  } else {
    document.getElementById("todo-list").appendChild(li);
  }
  document.getElementById("to_dos").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u2715");
  span.className = "delBtn";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < delBtn.length; i++) {
    delBtn[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

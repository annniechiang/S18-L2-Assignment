"use strict";

function createToDo() {
  var todo = document.createElement("div");
  var span = document.createElement("span");
        
  var input = document.getElementById("input").value;
  if(input == "") {
    input = "廢文一篇"
  }
  span.innerHTML = input;
  todo.appendChild(span);

  var replaceButton = document.createElement("button");
  replaceButton.onclick = function() {
    var input = document.getElementById("input").value;
    if(input == "") {
      alert("沒有輸入任何文字!");
      return;
    }
    this.parentNode.firstChild.innerHTML = input;
    document.getElementById("input").value = "";
  }

  var removeButton = document.createElement("button");
  replaceButton.textContent = "R";
  todo.appendChild(replaceButton);

  removeButton.onclick = function() {
    if(confirm("是否確定完成？")){
      this.parentNode.firstChild.style.color = "gray";
      //this.parentNode.removeChild(this.parentNode.firstChild.nextSibling);
      this.parentNode.removeChild(replaceButton);
      //this.parentNode.removeChild(this.parentNode.lastChild);
      this.parentNode.removeChild(this);
    }
  }

  removeButton.textContent = "V";
  todo.appendChild(removeButton);

  var todolist = document.getElementById("todolist");
  todolist.appendChild(todo);
  document.getElementById("input").value = "";
}
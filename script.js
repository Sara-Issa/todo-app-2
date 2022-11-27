// add todo List
var data = JSON.parse(localStorage.getItem("todos"));
localStorage.setItem("todos", JSON.stringify(data));
function add() {
  var input = document.querySelector(".todo-input");
  if (input.value == "") {
    alert("Please fill the empty place");
  } else {
    var obj = {
      todo: input.value,
      status: "undone",
    };
  }
  console.log(obj);
  var data = JSON.parse(localStorage.getItem("todos")) || [];
  data.push(obj);
  localStorage.setItem("todos", JSON.stringify(data));
  show();
}

window.addEventListener("load", function () {
  show();
});

// show todo List
function show() {
  var card = document.querySelector(".ul");
  card.innerHTML = "";
  var value = JSON.parse(localStorage.getItem("todos"));

  for (let i = 0; i < value.length; i++) {
    var done = value[i].status == "undone" ? "" : "checked";
    var line = value[i].status == "undone" ? "" : "line-through";
    var object = value[i];
    card.innerHTML += `<li class="li" >
    <input
      type="checkbox"
      class="check-input"
      onclick="update(${i});"
      name="vehicle1"
      ${done}
    /><label class="${line} todo-label" for="">${object.todo}</label>
    <button type="button" class="delete-btn" onclick="del(${i});" >
      <i class="fa-solid fa-trash"></i>
    </button>
  </li>`;
  }
}
// update todo List
function update(i) {
  var value = JSON.parse(localStorage.getItem("todos"));
  var status = value[i].status;
  if (status == "undone") {
    status = value[i].status = "done";
    localStorage.setItem("todos", JSON.stringify(value));
  } else if (status == "done") {
    status = value[i].status = "undone";
    localStorage.setItem("todos", JSON.stringify(value));
  }
  show();
}

// delete todo List
function del(i) {
  var value = JSON.parse(localStorage.getItem("todos"));
  value.splice(i, 1);
  localStorage.setItem("todos", JSON.stringify(value));
  show();
}

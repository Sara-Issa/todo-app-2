// add todo List
var data = JSON.parse(localStorage.getItem("todos"));
data.push();
JSON.stringify(localStorage.setItem("todos"));
function add() {
  var obj = {
    todo: "hi",
    status: "undone",
  };

  console.log(obj);
  var data = JSON.parse(localStorage.getItem("todos")) || [];
  data.push(obj);
  JSON.stringify(localStorage.setItem("todos"));
}
// show todo List

// update todo List

// delete todo List

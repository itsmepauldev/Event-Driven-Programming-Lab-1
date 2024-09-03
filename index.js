const btn = document.getElementById("Click");
const dclick = document.getElementById("dbclick");
const down = document.getElementById("down");
const up = document.getElementById("up");
const over = document.getElementById("over");
const out = document.getElementById("out");
const move = document.getElementById("move");
btn.onclick = function () {
  alert("Click Done");
};
dclick.ondblclick = function () {
  alert("Double Click Done");
};

down.onmousedown = function () {
  alert("Mouse Down Done");
};
up.onmouseup = function () {
  alert("Mouse Up Done");
};
over.onmouseover = function () {
  alert("Mouse Over");
};
out.onmouseout = function () {
  alert("Bat mo inalis");
};
move.onmousemove = function () {
  alert("Mouse Move");
};

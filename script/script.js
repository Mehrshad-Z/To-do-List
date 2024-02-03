"use strict";

let chooseColor = document.querySelectorAll(".add-color");
const btnAdd = document.querySelector(".add-task");
const setTask = document.getElementById("set-task");
const incompletTask = document.querySelector(".incomplete");
let checkbox = document.getElementById("check-box");

let color;

for (let i = 0; i < chooseColor.length; i++) {
  chooseColor[i].addEventListener("click", function () {
    color = window.getComputedStyle(chooseColor[i]).backgroundColor;
    setTask.style.backgroundColor = color;
    return color;
  });
}

btnAdd.addEventListener("click", function () {
  if (setTask.value) {
    incompletTask.insertAdjacentHTML(
      "beforebegin",
      `<div class="task d-flex">
                        <input type="checkbox" name="" id="check-box" style="border-color :${color}">
                        <input type="text" name="" id="task-text" value="${setTask.value}" readonly>
                        <div class="task-menu d-flex">
                            <span class="task-menu-i"></span>
                            <span class="task-menu-i"></span>
                            <span class="task-menu-i"></span>
                        </div>
                        <div class="task-option">
                            <i class="task-option-i">
                                <img src="asset/pic/trash.svg" alt="">
                            </i>
                            <hr class="option-divider">
                            <i class="task-option-i">
                                <img src="asset/pic/pencil.svg" alt="">
                            </i>
                        </div>
                    </div>`
    );
    color = "";
    setTask.value = "";
    setTask.style.backgroundColor = "#f0f0f0";
  }
});

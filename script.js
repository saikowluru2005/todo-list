const inputbox = document.getElementById("input-box");
const listconatiner = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("Empty list");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listconatiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listconatiner.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentNode.remove();
        saveData();
    } else if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("Data", listconatiner.innerHTML);
}

function showTask() {
    listconatiner.innerHTML = localStorage.getItem("Data");
}
showTask();
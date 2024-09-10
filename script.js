let input = document.querySelector("#input");
let table = document.querySelector("#table");
let tbody = document.querySelector("#table > tbody");




// טעינת localStorage בעת טעינת הדף
window.onload = function() {
  myUL.innerHTML = localStorage.getItem("list");
}




// יצירת משימה חדשה
function addMission() {
  if (input.value === "") {
    alert("הוסף משימה חדשה");
  } 
  else {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let id = document.createElement("td");
    let toDo = document.createElement("td");
    let status = document.createElement("td");
    let actions = document.createElement("td");
    tr.appendChild(id);
    tr.appendChild(toDo); 
    tr.appendChild(status);
    tr.appendChild(actions);
    id.textContent = getGuid();
    toDo.textContent = input.value;

  }
  
}

// קבל GUID עם תאריך עדכני

function getGuid(){

  return Math.random() + Date.now();

}


myUL.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveList();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveList();
  }
}, false);




// שמירה ב localStorage
function saveList() {
  localStorage.setItem("list", myUL.innerHTML);
}


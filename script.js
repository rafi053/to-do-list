const myInput = document.getElementById("myInput");
const myUL = document.getElementById("myUL");


// טעינת localStorage בעת טעינת הדף
window.onload = function() {
  myUL.innerHTML = localStorage.getItem("list");
}




// יצירת משימה חדשה
function newElement() {
  if (myInput.value === "") {
    alert("הוסף משימה חדשה");
  } 
  else {
    let li = document.createElement("li");
    li.innerText = myInput.value;
    myUL.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  myInput.value = "";

  saveList();
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


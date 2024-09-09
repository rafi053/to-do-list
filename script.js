const myNodelist = document.querySelector("LI");
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  span.className = "close";
  myNodelist[i].appendChild(span);
  
  
}


const close = document.querySelector("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}

const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


//  יצירת משימה חדשה
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  li.appendChild(inputValue);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}
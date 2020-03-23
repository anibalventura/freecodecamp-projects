//Select all the .panel class on HTML
const panels = document.querySelectorAll(".panel");

//Toggle .open class when the function is call
function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive() {
  this.classList.toggle("openActive");
}

//Call the function when click
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("click", toggleActive));

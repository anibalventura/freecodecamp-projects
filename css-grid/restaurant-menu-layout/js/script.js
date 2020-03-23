const navButton = document.querySelector("button[aria-expanded]");

//Expand menu button when show
function toggleNav({ target }) {
  const expanded = target.getAttribute("aria-expanded") === "true" || false;

  navButton.setAttribute("aria-expanded", !expanded);
}

navButton.addEventListener("click", toggleNav);

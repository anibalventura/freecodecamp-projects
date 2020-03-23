//Set variables
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

//Active the menu when the mouse is hovering
function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  background.classList.add("open");

  //Variables for set the position of the background
  const dropdown = this.querySelector(".dropdown");
  const dropdownCords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  //Set the coords for the position of the background
  const coords = {
    height: dropdownCords.height,
    width: dropdownCords.width,
    top: dropdownCords.top - navCoords.top,
    left: dropdownCords.left - navCoords.left
  };

  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

//Disable the menu when the mouse is go away
function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach(triggers =>
  triggers.addEventListener("mouseenter", handleEnter)
);
triggers.forEach(triggers =>
  triggers.addEventListener("mouseleave", handleLeave)
);

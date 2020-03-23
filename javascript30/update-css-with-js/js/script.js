//Get the inputs of the controls as arrays
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || ""; //Set suffix for adding to the value
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

//Getting the arrays when change the value in controls
inputs.forEach(input => input.addEventListener("change", handleUpdate));

//Getting the value when move the mouse+change controls
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

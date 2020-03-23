const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

let lastChecked;

function handleCheck(e) {
  //Check if ther have the Shift key down
  //And check that they are checking it
  let inBetween = false; //Confirm if the checkbox is checked or notI
  if (e.shiftKey) {
    //Loop over every checkbox
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

//Play when press a key
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function from running
  audio.currentTime = 0; //Rewind from the start, to play continiusly
  audio.play();
  key.classList.add("playing");//Add animation
}

//Remove animation when immediately press a key
function removeTransition(e) {
  if (e.propertyName !== "transform") return; //Skip if it's not a tramsfom
  this.classList.remove("playing"); //Immediately remove playing class after pressing a key
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

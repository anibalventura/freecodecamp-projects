//Get the elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

//Set the functions

function togglePlay() {
  //Play or pause the video when click
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayButton() {
  //Change the play icon for pause when paused
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  //Skip the video in the time set on "data-skip" on the HTML button
  video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate() {
  //Change the value of the slidebar
  video[this.name] = this.value;
}

function progressUpdate() {
  //Update the progress bar when the video is playing
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scroll(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//Set the events listners

video.addEventListener("click", togglePlay); //Pause/Play when click
video.addEventListener("play", updatePlayButton); //Change button when play
video.addEventListener("pause", updatePlayButton); //Change button when pause
video.addEventListener("timeupdate", progressUpdate); //Update progress bar when video is running
toggle.addEventListener("click", togglePlay);

skipButtons.forEach(button => button.addEventListener("click", skip)); //Skip when press the buttons
ranges.forEach(range => range.addEventListener("click", rangeUpdate)); //Update video progress on click
ranges.forEach(range => range.addEventListener("mousemove", rangeUpdate)); //Update video progress on mouse move

let mousedown = false;
progress.addEventListener("click", scroll);
progress.addEventListener("mousemove", e => mousedown && scroll(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

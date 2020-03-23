let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("button");
const stopTime = document.querySelector('.stopButton');

function timer(seconds) {
  //Clear any existing timer
  clearInterval(countdown);

  const now = Date.now(); //Get the actuals seconds
  const then = now + seconds * 1000;
  displayTimeLeft(seconds); //Display first second --Line 18--
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    //Check if has to stop
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }

    //Display time
    displayTimeLeft(secondsLeft); //Display seconds left
  });
}

//Do the math and display the time left
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display; //Display time left on tab browser
  timerDisplay.textContent = display;
}

//Display when the timer is finish
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const fixedHour = hour > 12 ? hour - 12 : hour; //Display back time in 12 hours
  const minutes = end.getMinutes();

  endTime.textContent = `Be back at ${fixedHour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

//Start timer from buttons
function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

//Start timer from form
function startForm(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
}

//Stop timer
function stopTimer() {
  timer(0);
  endTime.textContent = `We are done!`;
}

buttons.forEach(button => button.addEventListener("click", startTimer)); //Timer buttons
document.customForm.addEventListener("submit", startForm); //Form
stopTime.addEventListener('click', stopTimer); //Stop button

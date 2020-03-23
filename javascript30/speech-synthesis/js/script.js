//Setting variables
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
msg.text = document.querySelector('[name="text"]').value;

//Get the voices to speak
function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map(
      voice =>
        `<option value ="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}

//Change voice in dropdown list
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggleVoice();
}

//Stop voice in toggle selection on dropdown list
function toggleVoice(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

//Setup options
function setOptions() {
  msg[this.name] = this.value;
  toggleVoice();
}

//Events on the page
speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach(option => option.addEventListener('change', setOptions));
speakButton.addEventListener('click', toggleVoice);
stopButton.addEventListener('click', () => toggleVoice(false));
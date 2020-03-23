const secondsHand = document.querySelector(".secondsHand");
const minutesHand = document.querySelector(".minutesHand");
const hoursHand = document.querySelector(".hoursHand");

function setDate() {
  const now = new Date(); //Set constant to get time

  //Seconds
  const seconds = now.getSeconds(); //Get seconds from 'now' constant
  const secondsDegrees = ((seconds / 60) * 360) + 90; //Convert seconds to degrees to match css transition
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`; //Update the class for animation

  //Minutes
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  //Hours
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

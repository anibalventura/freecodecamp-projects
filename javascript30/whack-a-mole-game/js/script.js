const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

//Set random time for moles
function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//Set random hole for mole appear
function randHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  if (hole === lastHole) {
    return randHole(holes);
  }

  lastHole = hole;
  return hole;
}

//Mole appear and dessapear
function molePop() {
  const time = randTime(200, 1000);
  const hole = randHole(holes);
  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) molePop();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  molePop();

  //Stop the game after 15 seconds
  setInterval(() => {
    timeUp = true;
  }, 15000);
}

//Score by clicking moles
function smash(e) {
  if (!e.isTrusted) return; //Cheating!
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}

moles.forEach(moles => moles.addEventListener("click", smash));

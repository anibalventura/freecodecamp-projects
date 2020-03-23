const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 200;

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  let x = e.offsetX;
  let y = e.offsetY;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  //Apply effect
  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 red,
  ${xWalk * -1}px ${yWalk}px 0 blue,
  ${yWalk}px ${xWalk * -1}px 0 yellow,
  ${yWalk * -1}px ${xWalk}px 0 cyan
  `;
}

hero.addEventListener("mousemove", shadow);

//Get variables for css
const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");

//Create the div with the image
function generateHTML([h, v]) {
  return `
  <div class="item h${h} v${v}">
    <img src="../images/${randomNumber(12)}.jpg">
    <div class="item__overlay">
      <button>View</button>
    </div>
  </div>
  `;
}

//Get a random number for the images position
function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

//Click for see the images
function handleClick(e) {
  const src = e.currentTarget.querySelector("img").src;
  overlayImage.src = src;
  overlay.classList.add("open"); //Open the image
}

//Images close button
function close() {
  overlay.classList.remove("open");
  TODO: "Add close with ESC key";
}

//Set random array for the space ocupied for the images in the css grid
const digits = Array.from({ length: 50 }, () => [
  randomNumber(4),
  randomNumber(4)
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1]
]);

//generate the random images with the html
const html = digits.map(generateHTML).join("");
gallery.innerHTML = html;

//Click the view button for see the image
const items = document.querySelectorAll(".item");
items.forEach(item => item.addEventListener("click", handleClick));
overlayClose.addEventListener("click", close); //Close image

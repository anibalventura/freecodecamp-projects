const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

//Set the windows browser to the actual size of the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Style of the draw line
ctx.strokeStyle = "#BADA55"; //Start color
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 80; //Size of the line

//Set drawing variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

//Where the drawing is happening
function draw(e) {
  if (!isDrawing) return; //Stop the function when no have mouse move
  console.log(e);

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; //Color of the line

  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // start from
  ctx.lineTo(e.offsetX, e.offsetY); // go to
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  //Color-line change
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 80 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

const ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  if (x + dx > canvas.width || x + dx < 0) {
    dx = -dx;
  }

  if (y + dy > canvas.heigh || y + dy < 0) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);

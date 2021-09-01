document.body.style.backgroundColor = "black";
const canvas = document.getElementById("canvas");
canvas.style.backgroundColor = "white";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

let ball;
function init() {
  ball = new Ball(100, 100);
  draw();
}
function draw() {
  ctx.clearRect(0, 0, width, height);

  ball.draw();
  ball.move();
  ball.edges();

  requestAnimationFrame(draw);
}

init();

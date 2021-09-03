// Forces (Gravity and Fluid Resistence) with Vectors

// Demonstration of multiple force acting on bodies (Mover class)
// Bodies experience gravity continuously
// Bodies experience fluid resistance when in "water"

// Five moving bodies
const movers = [];

// Liquid
let liquid;

const canvas = document.getElementById("canvas");
canvas.style.backgroundColor = "white";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

function setup() {
  reset();
  // Create liquid object
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);

  draw();
}
function drawFont() {
  ctx.font = "30px Arial";
  ctx.fillStyle = "rgb(0,0,255)";
  ctx.fillText("click mouse to reset", 10, 30);
  ctx.fill();
}
function draw() {
  ctx.clearRect(0, 0, width, height);
  // Draw water
  liquid.display();

  movers.forEach((m) => {
    // Is the Mover in the liquid?
    if (liquid.contains(m)) {
      // Calculate drag force
      const dragForce = liquid.drag(m);
      // Apply drag force to Mover
      m.applyForce(dragForce);
    }

    m.display();

    // Update and display
    m.update();
    m.checkEdges();

    // Gravity is scaled by mass here!
    const gravity = new Vector(0, 0.1 * m.mass);
    // Apply gravity
    m.applyForce(gravity);
  });

  drawFont();

  requestAnimationFrame(draw);
}

window.addEventListener("mousedown", mousePressed);
function mousePressed() {
  reset();
}

// Restart all the Mover objects randomly
function reset() {
  for (let i = 0; i < 5; i++) {
    movers[i] = new Mover(Math.random() * 0.5 + 3, 40 + i * 120, 0);
  }
}

setup();

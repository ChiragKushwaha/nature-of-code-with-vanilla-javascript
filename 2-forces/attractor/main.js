document.body.style.backgroundColor = "black";
const canvas = document.getElementById("canvas");
canvas.style.backgroundColor = "white";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

let isMousePressed = false;

let sun;
let planets = [];
function init() {
  const dum = new Mover(20);
  sun = new Attractor(dum);
  for (let i = 0; i < 10; i++) {
    planets[i] = new Mover(
      Math.random() * 1 + 0.1,
      400 * Math.random() + 20,
      500 * Math.random() + 60,
      Math.random() * 20 + 8,
      `rgba(${Math.random() * 0.5}0,${Math.random() * 0.5},0,${
        Math.random() * 0.5
      })`
    );
  }
  draw();
}

function draw() {
  ctx.clearRect(0, 0, width, height);

  planets.forEach((planet) => {
    const force = sun.attract(planet);

    planet.applyForce(force);

    planet.draw();
    planet.move();
    planet.edges();

    sun.attractor.draw();
  });

  requestAnimationFrame(draw);
}

window.addEventListener("mousemove", function () {
  if (isMousePressed) {
    sun.attractor.update_location();
  }
});
window.addEventListener("mousedown", function () {
  isMousePressed = true;
});
window.addEventListener("mouseup", function () {
  isMousePressed = false;
});
init();

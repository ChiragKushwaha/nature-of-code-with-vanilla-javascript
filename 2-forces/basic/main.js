const canvas = document.getElementById("canvas");
canvas.style.backgroundColor = "white";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

let movers = [];
function init() {
  for (let i = 0; i < 1; i++) {
    movers[i] = new Mover();
  }
  draw();
}

function draw() {
  ctx.clearRect(0, 0, width, height);

  movers.forEach((m) => {
    const gravity = new Vector(0, 0.3);
    gravity.mult(m.mass);
    m.applyForce(gravity);

    // const wind = new Vector(0.05, 0);
    // m.applyForce(wind);

    if (window.mousePressed) {
      // const friction = m.velocity.get();
      // const c = -0.01;
      // friction.setMag(c);
      // m.applyForce(friction);

      const drag = new Vector(m.velocity.x, m.velocity.y, m.velocity.z);
      drag.normalize();
      const c = -0.1;
      const speed = m.velocity.mag();
      drag.mult(c * speed * speed);
      m.applyForce(drag);
    }

    m.draw();
    m.move();
    // m.edges();
    m.bounce();
  });

  requestAnimationFrame(draw);
}

init();

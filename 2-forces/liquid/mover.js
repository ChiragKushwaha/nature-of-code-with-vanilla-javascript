const Vector = C3.Vector;
class Mover {
  constructor(m, x, y) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.mass = m;
  }

  // Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(force) {
    // Divide by mass
    const f = Vector.div(force, this.mass);
    // Accumulate all forces in acceleration
    this.acceleration.add(f);
  }

  update() {
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    // position changes by velocity
    this.position.add(this.velocity);
    // We must clear acceleration each frame
    this.acceleration.mult(0);
  }

  // Draw Mover
  display() {
    ctx.lineWidth = 0.5;
    ctx.stroke();
    ctx.fillStyle = "rgb(127, 200, 0)";

    ctx.beginPath();
    ctx.arc(
      this.position.x,
      this.position.y,
      this.mass * 16,
      this.mass * 16,
      Math.PI * 2,
      true
    );
    ctx.closePath();
    ctx.fill();
  }

  // Bounce off bottom of window
  checkEdges() {
    if (this.position.y > height) {
      this.velocity.y *= -0.9; // A little dampening when hitting the bottom
      this.position.y = height;
    }
  }
}

const Vector = C3.Vector;
class Mover {
  constructor() {
    this.radius = 25;
    this.location = new Vector(width / 2, 0);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.color = "red";
    this.mass = Math.random() * 2 + 1;
  }

  move() {
    // this.mouse = new Vector(window.mouseX, window.mouseY);
    // this.mouse.sub(this.location);
    // this.acceleration = this.mouse;
    // this.acceleration.setMag(0.1);

    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
    // this.velocity.limit(5);
  }

  edges() {
    if (this.location.x > width) this.location.x = 0;
    if (this.location.x < 0) this.location.x = width;
    if (this.location.y > height) this.location.y = 0;
    if (this.location.y < 0) this.location.y = height;
  }

  bounce() {
    if (
      this.location.x > width - this.radius ||
      this.location.x < this.radius
    ) {
      this.velocity.x = this.velocity.x * -1;
    }
    if (
      this.location.y > height - this.radius ||
      this.location.y < this.radius
    ) {
      this.velocity.y = this.velocity.y * -1;
    }
  }

  applyForce(force) {
    const _force = Vector.div(force, this.mass);
    this.acceleration.add(_force);
  }

  draw() {
    ctx.beginPath();
    ctx.arc(
      this.location.x,
      this.location.y,
      this.radius,
      0,
      Math.PI * 2,
      true
    );
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const Vector = C3.Vector;

class Mover {
  constructor(
    m,
    x = width / 2,
    y = height / 2,
    radius = 25,
    color = "rgba(200,200,100, 0.8)"
  ) {
    this.location = new Vector(x, y);
    this.velocity = new Vector(1, 0);
    this.acceleration = new Vector(0, 0);
    this.radius = radius;
    this.color = color;
    this.mass = m;
  }

  update_location() {
    this.mouse = new Vector(mouseX, mouseY);
    this.location = this.mouse;
  }

  move() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  applyForce(force) {
    const _force = Vector.div(force, this.mass);
    this.acceleration.add(_force);
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

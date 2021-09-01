class Ball {
  constructor(x, y, radius = 25, vx = 5, vy = 2, color = "red") {
    this.location = new PVector(width / 2, height / 2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.radius = radius;
    this.color = color;
  }

  move() {
    // this.acceleration = PVector.random2D();
    this.mouse = new PVector(window.mouseX, window.mouseY);
    this.mouse.sub(this.location);
    this.acceleration = this.mouse;
    this.acceleration.setMag(0.1);

    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.velocity.limit(5);
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

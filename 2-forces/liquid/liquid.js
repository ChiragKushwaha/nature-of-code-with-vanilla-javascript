class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  contains(m) {
    const l = m.position;
    return (
      l.x > this.x &&
      l.x < this.x + this.w &&
      l.y > this.y &&
      l.y < this.y + this.h
    );
  }

  drag(m) {
    // Magnitude is coefficient * speed squared
    const speed = m.velocity.mag();
    const dragMagnitude = this.c * speed * speed;

    const dragForce = new Vector(m.velocity.x, m.velocity.y);
    dragForce.mult(-1);

    // Scale according to magnitude
    // dragForce.setMag(dragMagnitude);
    dragForce.normalize();
    dragForce.mult(dragMagnitude);
    return dragForce;
  }

  display() {
    ctx.stroke();
    ctx.fillStyle = "rgba(25,255,25,0.2)";
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fill();
  }
}

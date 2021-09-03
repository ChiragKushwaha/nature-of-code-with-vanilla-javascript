class Attractor {
  constructor(m) {
    this.attractor = m;
    this.G = 1;
    this.dragOffset = new Vector(0, 0);
  }

  attract(m) {
    const force = Vector.sub(this.attractor.location, m.location);
    let d = force.mag();
    d = Vector.constrain(d, 5, 10);
    force.normalize();

    const strength = (this.G * this.attractor.mass * m.mass) / (d * d);

    force.mult(strength);

    return force;
  }
}

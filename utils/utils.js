function importFile(path) {
  const script = document.createElement("script");
  script.src = path;
  script.type = "text/javascript";
  script.defer = true;
  document.body.appendChild(script);
}

window.addEventListener("mousemove", function (ev) {
  Object.prototype.mouseX = ev.clientX;
  Object.prototype.mouseY = ev.clientY;
});

class PVector {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(vect3) {
    this.x += vect3.x;
    this.y += vect3.y;
    this.z += vect3.z;
  }
  sub(vect3) {
    this.x -= vect3.x;
    this.y -= vect3.y;
    this.z -= vect3.z;
  }
  mult(val) {
    this.x *= val;
    this.y *= val;
    this.z *= val;
    return this;
  }
  div(val) {
    this.x /= val;
    this.y /= val;
    this.z /= val;
    return this;
  }
  magSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  mag() {
    return Math.sqrt(this.magSq());
  }
  normalize() {
    const m = this.mag();
    if (m !== 0) this.mult(1 / m);
    return this;
  }
  setMag(val) {
    return this.normalize().mult(val);
  }
  limit(max) {
    const mSq = this.magSq();
    if (mSq > max * max) {
      this.div(this.mag()).mult(max);
    }
    return this;
  }
  static fromAngle(angle, length = 1) {
    return new PVector(length * Math.cos(angle), length * Math.sin(angle), 0);
  }
  static random2D() {
    return this.fromAngle(Math.random() * Math.PI * 2);
  }
}

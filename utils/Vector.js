const vector = class Vector {
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

  static constrain(n, low, high) {
    return Math.max(Math.min(n, high), low);
  }
  static sub(vect1, vect2) {
    return new Vector(vect1.x - vect2.x, vect1.y - vect2.y, vect1.z - vect2.z);
  }
  static div(vect3, val) {
    return new Vector(vect3.x / val, vect3.y / val, vect3.z / val);
  }
  static fromAngle(angle, length = 1) {
    return new Vector(length * Math.cos(angle), length * Math.sin(angle), 0);
  }
  static random2D() {
    return this.fromAngle(Math.random() * Math.PI * 2);
  }
};

window.C3.export(vector);

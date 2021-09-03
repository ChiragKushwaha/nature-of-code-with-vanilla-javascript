window.addEventListener("mousemove", function (ev) {
  Object.prototype.mouseX = ev.clientX;
  Object.prototype.mouseY = ev.clientY;
});
window.addEventListener("mousedown", function () {
  Object.prototype.mousePressed = true;
});
window.addEventListener("mouseup", function () {
  Object.prototype.mousePressed = false;
});

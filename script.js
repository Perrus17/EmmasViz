var KEY = { a:65, d:68, w:87, s:83 };
var move = 25;
var maxMoveX = 1170; // Change to your SVG width
var maxMoveY = 2523; // Change to your SVG height
var pacman = document.getElementById("PacMan");
var x = 0,
    y = 0,
    direction = "right";

document.documentElement.addEventListener('keydown', function(press) {
  switch (press.keyCode) {
    case KEY.a: // Move left
      if (x - move >= 0) {
        x -= move;
        direction = "left";
      }
      break;
    case KEY.d: // Move right
      if (x + move <= maxMoveX) {
        x += move;
        direction = "right";
      }
      break;
    case KEY.w: // Move up
      if (y - move >= 0) {
        y -= move;
      }
      break;
    case KEY.s: // Move down
      if (y + move <= maxMoveY) {
        y += move;
      }
      break;
    default:
      break;
  }
  pacman.setAttribute("transform", `translate(${x},${y}) scale(${direction === "right" ? 0.5 : -0.5},0.5)`);
}, false);
document.getElementById('up').addEventListener('click', function() {
  if (y - move >= 0) {
    y -= move;
  }
  pacman.setAttribute("transform", `translate(${x},${y}) scale(${direction === "right" ? 0.5 : -0.5},0.5)`);
});

document.getElementById('down').addEventListener('click', function() {
  if (y + move <= maxMoveY) {
    y += move;
  }
  pacman.setAttribute("transform", `translate(${x},${y}) scale(${direction === "right" ? 0.5 : -0.5},0.5)`);
});

document.getElementById('left').addEventListener('click', function() {
  if (x - move >= 0) {
    x -= move;
    direction = "left";
  }
  pacman.setAttribute("transform", `translate(${x},${y}) scale(${direction === "right" ? 0.5 : -0.5},0.5)`);
});

document.getElementById('right').addEventListener('click', function() {
  if (x + move <= maxMoveX) {
    x += move;
    direction = "right";
  }
  pacman.setAttribute("transform", `translate(${x},${y}) scale(${direction === "right" ? 0.5 : -0.5},0.5)`);
});

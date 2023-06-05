var KEY = { a:65, d:68, w:87, s:83 };
var move = 50;
var maxMoveX = 5000; // Change to your SVG width
var maxMoveY = 2500; // Change to your SVG height
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
  pacman.setAttribute("transform", `translate(${x},${y}) scale(${direction === "right" ? 1 : -1},1)`);
}, false);

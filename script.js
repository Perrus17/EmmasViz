var KEY = { a:65, d:68, w:87, s:83 };
var move = 25;
var maxMoveX = 450; // This matches your SVG width
var maxMoveY = 800; // This matches your SVG height

var pacman = document.getElementById("PacMan");
var x = 0,
    y = 0,
    direction = "right";

function getAdjustedMove() {
    var scaleRatio = document.querySelector('svg').getBoundingClientRect().width / maxMoveX;
    return move * scaleRatio;
}


document.documentElement.addEventListener('keydown', function(press) {
  var adjustedMove = getAdjustedMove();
  switch (press.keyCode) {
      case KEY.a: // Move left
      if (x - adjustedMove >= 0) {
          x -= adjustedMove;
          direction = "left";
      }
      break;
      case KEY.d: // Move right
      if (x + adjustedMove <= maxMoveX) {
          x += adjustedMove;
          direction = "right";
      }
      break;
      case KEY.w: // Move up
      if (y - adjustedMove >= 0) {
          y -= adjustedMove;
      }
      break;
      case KEY.s: // Move down
      if (y + adjustedMove <= maxMoveY) {
          y += adjustedMove;
      }
      break;
      default:
      break;
  }
  pacman.setAttribute("transform", `translate(${x},${y}) scale(${direction === "right" ? 0.5 : -0.5},0.5)`);
}, false);


document.getElementById('up').addEventListener('click', function() {
  var adjustedMove = getAdjustedMove();
  if (y - adjustedMove >= 0) {
      y -= adjustedMove;
  }
  pacman.setAttribute("transform", `translate(${x},${y}) scale(${direction === "right" ? 0.5 : -0.5},0.5)`);
});

document.getElementById('down').addEventListener('click', function() {
  var adjustedMove = getAdjustedMove();
  if (y + adjustedMove <= maxMoveY) {
      y += adjustedMove;
  }
  pacman.setAttribute("transform", `translate(${x},${y}) scale(${direction === "right" ? 0.5 : -0.5},0.5)`);
});

document.getElementById('left').addEventListener('click', function() {
  var adjustedMove = getAdjustedMove();
  if (x - adjustedMove >= 0) {
      x -= adjustedMove;
      direction = "left";
  }
  pacman.setAttribute("transform", `translate(${x},${y}) scale(${direction === "right" ? 0.5 : -0.5},0.5)`);
});

document.getElementById('right').addEventListener('click', function() {
  var adjustedMove = getAdjustedMove();
  if (x + adjustedMove <= maxMoveX) {
      x += adjustedMove;
      direction = "right";
  }
  pacman.setAttribute("transform", `translate(${x},${y}) scale(${direction === "right" ? 0.25 : -0.25},0.25)`);

});

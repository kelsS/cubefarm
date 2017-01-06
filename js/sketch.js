var canvas;

var barWidth = 20;
var lastBar = -1;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('background', '#000');
  colorMode(HSB, height, height, height);
  frameRate(20);  
  noStroke();
}

function draw() {
  var whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    var barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

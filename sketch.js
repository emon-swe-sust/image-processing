function setup() {
  createCanvas(2000, 1000);
}

function drawAxis(scale){
  background(220)
  
  //Making the axis
  stroke('black')
  strokeWeight(1)
  line(0, 500, 2000, 500)
  stroke('black')
  strokeWeight(1)
  line(1000, 0, 1000,1000)
}

function drawPoint(x, y, scale) {
  x = x * scale + 1000
  y = -y * scale + 500
  
  square(x, y, 1)
  strokeWeight(scale)
}

function drawLine(x1, y1, x2, y2, scale, color) {
  x1 = x1 * scale + 1000
  y1 = -y1 * scale + 500
  x2 = x2 * scale + 1000
  y2 = -y2 * scale + 500
  stroke(color)
  strokeWeight(scale)
  line(x1, y1, x2, y2)
}

function draw() {
  scale = 4
  drawAxis(scale)

  // DDA(150,-105, -36, 60, scale)
  // BresenhamLine(5, 5,-36, -60, scale)

  // BresenhamCircle(50, -5, 13, scale)
  // MidPointCircle(-50, -5, 33, scale)

  // CohenSutherland(10, 12, 35, 42, scale);
  // CohenSutherland(10, 30, 95, 42, scale);
  // CohenSutherland(15, 85, 65, 90, scale);
  // CohenSutherland(50, 95, 95, 30, scale);
}
function setup() {
  createCanvas(2000, 1000);
}

function makeAxis(scale){
  background(220)
  
  //Making the axis
  line(0, 500, 2000, 500)
  line(1000, 0, 1000,1000)
  strokeWeight(scale)
}

function drawPoint(x, y, scale) {
  x = x * scale + 1000
  y = -y * scale + 500
  
  square(x, y, 1)
  strokeWeight(scale)
}

function draw() {
  scale = 5
  makeAxis(scale)

  DDA(150,-105, -36, 60, scale)
  BresenhamLine(5, 5,-36, -60, scale)

  BresenhamCircle(50, -5, 13, scale)
  MidPointCircle(-50, -5, 33, scale)
}
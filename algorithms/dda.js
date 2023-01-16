function DDA(x1, y1, x2, y2, scale) { 
    dx = x2 - x1;
    dy = y2 - y1;
    let step;
  
    if (Math.abs(dx) > Math.abs(dy))
        step = Math.abs(dx)
    else
        step = Math.abs(dy)
  
      x_incr = dx / step
      y_incr = dy / step
  
      x = x1
      y = y1
  
    for ( i = 0; i < step; i++) {
        drawPoint(round(x), round(y), scale)
        x += x_incr
        y += y_incr
    }
};  
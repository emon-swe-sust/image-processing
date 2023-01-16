function BresenhamLine(x1, y1, x2, y2, scale) {

  if(x1 > x2){
    [x1, y1, x2, y2] = [x2, y2, x1, y1]
  }

  dx = x2 - x1
  dy = y2 - y1
  orginalDy = dy

  if(dx === 0){  
    x1 = x1 * scale + 1000
    y1 = -y1 * scale + 500
    x2 = x2 * scale + 1000
    y2 = -y2 * scale + 500

    line(x1, y1, x2, y2)
  } else {
    m = dy / dx

    if(dy<0){
      y2 = y2 - 2*dy
      dy = y2 - y1
      m = dy / dx
    }

    d = []
    d.push(2*dy-dx)
    
    x = x1
    y = y1


    points = [{'x':x, 'y':y}]
    
    if(m > 0 && m < 1){
      for( i = 1; i < dx; i++){
        if(d[i-1] < 0){
          x = x + 1
          d.push(d[i-1] + 2*dy)
        } else {
          x = x + 1
          y = y + 1
          d.push(d[i-1] + 2*dy - 2*dx)
        }
        points.push({'x':x, 'y':y})
      }
    } else if(m >= 1){
      for ( i = 1; i<= dy; i++){
        if(d[i-1] < 0){
          y = y + 1
          d.push(d[i-1] + 2*dx)
        } else {
          y = y + 1
          x = x + 1
          d.push(d[i-1] + 2*dx - 2*dy)
        }
        points.push({'x':x, 'y':y})
      }
    }

    // if m is negative, it was mirrored before, now mirroring it back with X axis!
    if(orginalDy < 0) { 
      for ( i = 0; i < points.length; i++){
        points[i].y = points[i].y - 2*(points[i].y - points[0].y)
      }
    }

    points.forEach((point)=> {
      drawPoint(point.x, point.y, scale)
    })
  }
}
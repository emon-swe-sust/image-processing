function MidPointCircle (x0, y0, r, scale) {
    points = []
    q1Points = []
    allPoints = []

    d = 1 - r
    x = 0
    y = r
    points.push({'x': x, 'y': y})

    while((x) < (y)){
        if(d < 0) {
        d = d + 2*x + 3
        x = x + 1
        } else {
        d = d + 2*(x-y) + 5
        x = x + 1
        y = y - 1
        }
        points.push({'x': x, 'y': y})
    }

    q1Points = points

    for(let i=points.length - 1; i >= 0; i--){
        q1Points.push({'x': points[i].y, 'y': points[i].x})
    }

    for(let i=q1Points.length - 1; i >= 0; i--){
        allPoints.push({'x': q1Points[i].y, 'y': q1Points[i].x})
    }

    for (let i=0; i<q1Points.length; i++){
        allPoints.push({'x': -q1Points[i].x, 'y': q1Points[i].y})
        allPoints.push({'x': -q1Points[i].x, 'y': -q1Points[i].y})
        allPoints.push({'x': q1Points[i].x, 'y': -q1Points[i].y})
    }

    allPoints.forEach((point) => {
        drawPoint(point.x+x0, point.y+y0, scale)
    })
ß}

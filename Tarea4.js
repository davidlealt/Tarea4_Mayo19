//Esta me la piratée de internet para generar un color random...
function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (x= 0; x< 6; x++ ) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

//Esto ya es mío
var fig = {x:0, y:0, size: 30, color: getRandomColor()}
xStartPos = 0.50 * canvas.width - fig.size/2
fig.x = xStartPos

yStartPos = 0.10 * canvas.height
velY = 1;
fig.y = yStartPos

function drawBall() {
  clear()
  circle(fig)

  if(velY > 0){
    velY *= 1.02
    fig.y += velY
    if (fig.y >= (canvas.height - fig.size)){
      velY = -velY
      /*fig.color= getRandomColor()*/
    }
  }

  if(velY < 0){
    velY = velY/1.03
    fig.y += velY
    if (velY > -0.01){
      velY = -velY
      /*fig.color= getRandomColor()*/
    }
  }
  setTimeout(drawBall,5)
}

setTimeout(drawBall,5)

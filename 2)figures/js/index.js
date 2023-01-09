var canv = document.getElementById('canvas'),
ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight;


ctx.fillStyle = 'magenta';
ctx.fillRect(50, 50, 300, 200);

// ctx.arc(canv.width / 2, canv.height / 2, 100, 0, Math.PI*2);
// ctx.fill();

// ctx.rotate(10 * Math.PI/180)
// ctx.beginPath();
// ctx.moveTo(canv.width / 2, 400);
// ctx.lineTo((canv.width / 2)-100, 500);
// ctx.lineTo((canv.width / 2)+100, 500);
// ctx.closePath();
// ctx.stroke();

//rect animation
function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

  function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }

  let bounceEaseOut = makeEaseOut(bounce);

  brick.onclick = function() {
    animate({
      duration: 3000,
      timing: bounceEaseOut,
      draw: function(progress) {
        brick.style.left = progress * 500 + 'px';
      }
    });
  };
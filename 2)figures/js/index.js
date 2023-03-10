"use strict"
let canv = document.getElementById('canvas'),
ctx = canv.getContext('2d'),
tengl = document.getElementById('teng'),
tctx = tengl.getContext('2d');

canv.width = window.innerWidth;
//canv.height = window.innerHeight;

tengl.width = window.innerWidth;
tengl.height = window.innerHeight;


// ctx.fillStyle = 'magenta';
// ctx.rotate(359 * Math.PI/180)

// ctx.scale(2,2);
// ctx.arc(canv.width / 2, canv.height / 2, 20, 0, Math.PI*2);
// ctx.fill();
// let flag = true;

let x = 50;
ctx.fillRect(x, 0, 60, 30);

function rectMuve(){
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canv.width, canv.height);

  ctx.fillStyle = 'black';
  ctx.fillRect(x++, 0, 60, 30);
}

function rectClick(){
 setInterval(function(){
  rectMuve();
 }, 10);
}

// ctx.rotate(10 * Math.PI/180)
tctx.beginPath();
tctx.moveTo(canv.width / 2, 100);
tctx.lineTo((canv.width / 2)-100, 200);
tctx.lineTo((canv.width / 2)+100, 200);
tctx.closePath();
tctx.stroke();

let rect = document.getElementById('rotate-rect');
  let a = 1, b = 0, c = 0, d = 1, tx = 10, ty = 10, angle = 0, currentAngle;

  function getAngleToRAD(){
    if(angle === 360){
      angle = 0;
    }

    return angle++ * Math.PI / 180;
  }
  function update(){
    currentAngle = getAngleToRAD();

    rect.style.transform = 'matrix(' + Math.cos(currentAngle) + ',' + Math.sin(currentAngle) + ',' + -Math.sin(currentAngle) + ',' + Math.cos(currentAngle) + ',' + tx + ',' + tx + ')'
    window.requestAnimationFrame(update);
  }
  // update();

  let pul = document.getElementById('pulse');
  function addPulse() {
    pul.classList.add('pulse');
  }

let rotateCube = document.getElementById('cube');
function addRotateCube() {
  rotateCube.classList.add('rotatey-animation');
}
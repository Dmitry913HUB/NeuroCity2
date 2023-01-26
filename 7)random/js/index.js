"use strict"
function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min) + min);
}

let randomVal = getRandomInt(10,100);
console.log(randomVal);
let div;

function rectRandom(){
    for(i=1; i <= randomVal; i++){
        div = document.createElement('div');
        div.className = "rect";
        div.style.backgroundColor = `rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)})`;
        div.innerHTML = i;
        document.body.append(div);
    }
}

rectRandom();
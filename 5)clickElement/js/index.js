blockHide = document.getElementById('hide');
var flag = true;

function hiWi(){
    if(flag){
        flag = false;
        blockHide.style.display = 'block';
    }else{
        flag = true;
        blockHide.style.display = 'none';
    }
}

function debounce(f, ms) {

    let isCooldown = false;
  
    return function() {
      if (isCooldown) return;
  
      f.apply(this, arguments);
  
      isCooldown = true;
  
      setTimeout(() => isCooldown = false, ms);
    };  
}

function clickHiWi(){
    debounce(hiWi(), 1000)
}
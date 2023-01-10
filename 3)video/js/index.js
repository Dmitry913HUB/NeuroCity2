(function() {
    var  video = document.getElementById("video1"),
      current = document.getElementById("video1-current");
   

    video.addEventListener("click", function() {
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    }, false);   
    
    video.addEventListener("timeupdate", function() {
      current.innerHTML = formatTime(video.currentTime);
    }, false);
    
    function formatTime(time) {
      var 
        minutes = Math.floor(time / 60) % 60,
        seconds = Math.floor(time % 60),
        milisecond = time.toString().match(/\.(\d{3})/)?.[1];
        console.log(time);
    
      return   (minutes < 10 ? '0' + minutes : minutes) + ':' +
               (seconds < 10 ? '0' + seconds : seconds) + ':' +
               (milisecond);
    }

    video.addEventListener('ended', function() {
        video.currentTime = 0.000001;
    }, false);
            
})();
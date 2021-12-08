var music = document.getElementById("skellig");
function enableAutoplay() { 
  music.autoplay = true;
  music.load();
}

function disableAutoplay() { 
  music.autoplay = false;
  music.load();
} 

function checkAutoplay() { 
  alert(music.autoplay);
}


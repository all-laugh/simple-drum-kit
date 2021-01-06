var drums = document.querySelectorAll("button.drum");
for ( var i = 0; i < drums.length; i++ ) {
  drums[i].addEventListener("click", function() {
    var key = this.classList[0];
    playDrum( key );
    pressed( key );
  });
}

var keys = document.querySelectorAll(".key");
for ( var i = 0; i < keys.length; i++ ) {
  keys[i].addEventListener("click", function() {
    var key = this.innerHTML;
    playDrum( key );
    pressed( key );
  });
}

document.addEventListener("keydown", function() {
  playDrum( event.key );
  pressed( event.key );
});

function playDrum( key ) {
  switch (key) {
    case "a":
      var a = new Audio("sounds/tom-1.mp3");
      a.play();
      break;
    case "s":
      var s = new Audio("sounds/tom-2.mp3");
      s.play();
      break;
    case "d":
      var d = new Audio("sounds/tom-3.mp3");
      d.play();
      break;
    case "f":
      var f = new Audio("sounds/tom-4.mp3");
      f.play();
      break;
    case "j":
      var j = new Audio("sounds/kick-bass.wav");
      j.play();
      break;
    case "k":
      var k = new Audio("sounds/snare.mp3");
      k.play();
      break;
    case "l":
      var l = new Audio("sounds/crash.mp3");
      l.play();
      break;
    default: break;
  }
}

function pressed( key ) {
  var buttonPressed = document.querySelector("."+ key);
  buttonPressed.classList.add("pressed");
  setTimeout(function(){ buttonPressed.classList.remove("pressed");}, 100);
}

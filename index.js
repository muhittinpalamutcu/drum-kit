var n = document.querySelectorAll(".drum-kit").length;

clickLister();
keyboardListener();


function clickLister() {
  for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum-kit")[i].addEventListener("click", function() {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    })
  }
}

function keyboardListener() {
  document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  })
}

//Playing sound
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break
    case "l":
      var crash = new Audio('sounds/kick-bass.mp3');
      crash.play();
      break

    default:
      console.log(key);
  }
}

function buttonAnimation(key) {
  var pressedButton = document.querySelector("." + key);
  pressedButton.classList.add("button-animation");

  setTimeout(function() {
    pressedButton.classList.remove("button-animation");
  }, 100);
}

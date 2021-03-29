var drumPieces = document.querySelectorAll(".drum");

for (let i = 0; i < drumPieces.length; i++) {
  drumPieces[i].addEventListener("click", handleClick);
}

function handleClick() {
  // alert("I got clicked!");

  var buttonHTML = this.innerHTML;
  makeSound(buttonHTML);
  buttonAnimation(buttonHTML);

}

document.addEventListener("keydown", event => {
  console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
})



function makeSound(key) {

  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default: console.log(buttonHTML);

  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  console.log(activeButton.className);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  },150)
}

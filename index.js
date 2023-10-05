const buttons = document.querySelectorAll('drum');

buttons.forEach((button) => {
button.addEventListener('click', function{
    const soundFile = this.getAttribute('data-sound');
      playSound(soundFile);
})
})

document.addEventListener('keypress',function(event){
    const keyPressed = event.key;
    const button = document.querySelector(`.${keyPressed}.drum`);
    if (button) {
      const soundFile = button.getAttribute('data-sound');
      playSound(soundFile);
    }
})


function playSound(soundFile) {
    if (soundFile) {
      const audio = new Audio(soundFile);
      audio.play();
    }
  }
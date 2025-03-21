window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`.key[data-key=${e.code}]`);
    
    if(!audio) return; // Stop the function from running all together
    
    audio.currentTime = 0; // Rewind to the start
    
    audio.play();
    
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // Skip if its not a transform

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


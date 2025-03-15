window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);

    if(!audio) return; // Stop the function from running all together

    audio.play();
})
document.addEventListener('click', function() {
    var audioElement = document.getElementById('bgm');
    audioElement.play();
});

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        var audioElement = document.getElementById('bgm');
        audioElement.pause();
    }
});

window.onload = function() {
    let container = document.querySelector('.logo-container');
    
    container.parentNode.appendChild(clone);
};


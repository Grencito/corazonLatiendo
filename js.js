window.onload = function() {
    var audioElement = document.getElementById('myAudio');
    var activateButton = document.getElementById('activateSoundButton');
    var deactivateButton = document.getElementById('deactivateSoundButton');

    activateButton.addEventListener('click', function() {
        audioElement.play();
    });

    deactivateButton.addEventListener('click', function() {
        audioElement.pause();
    });
}

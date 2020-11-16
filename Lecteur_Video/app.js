let video = document.querySelector('.video');
let loading = document.querySelector('.orange-loading');
let btn = document.getElementById('play-pause');
let muteBtn = document.getElementById('mute');
let volumeSlider = document.getElementById('volumeSlider');
let orangeBar = document.querySelector('.orange-bar');

function togglePlayPause() {
    if(video.paused){
        btn.className="pause";
        video.play();
    }
    else {
        btn.className="play";
        video.pause();
    }
}

btn.onclick = function() {
    togglePlayPause();
}

// Loading Bar

video.addEventListener('timeupdate', function() {

    let loadingPos = video.currentTime / video.duration;

    loading.style.width = loadingPos * 100 + '%';

    if(video.ended) {
        btn.className = "play";
    }
})

// Mute - Unmute Button

muteBtn.addEventListener('click', function() {

    if(video.muted) {
        video.muted = false;
        muteBtn.innerHTML = "Mute";
    } else {
        video.muted = true;
        muteBtn.innerHTML = "Unmute"
    }

})

// Volume Slider

volumeSlider.addEventListener('change', function() {

    video.volume = volumeSlider.value / 100;
})

// Bar Selection

let rect = orangeBar.getBoundingClientRect();
console.log(rect);
 
let largeur = rect.width;

orangeBar.addEventListener('click', function(e) {

    // Value of x compared to the element

    let x = e.clientX - rect.left;
    let widthPercent = ((x * 100) / largeur);
    let currentTimeTrue = (widthPercent * 63) / 100;
    
    video.currentTime = currentTimeTrue;
    loading.style.width = widthPercent + '%';
})
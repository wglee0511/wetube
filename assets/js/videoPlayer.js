
const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");

function handlePlayClick() {
    if(videoPlayer.paused){
        videoPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
};

function handleVolumeClick() {
    if(videoPlayer.muted){
        videoPlayer.muted = false;
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        videoPlayer.muted = true;
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
};

function exitFullScreen() {
    fullScrBtn.innerHTML = '<i class="fas fa-expand"></i>';
    fullScrBtn.addEventListener("click", goFullScreen);
    if(document.exitFullscreen){
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullScreen) {
        document.webkitExitFullScreen();
    } else if (document.msExitFullScreen) {
        document.msExitFullScreen();
    }
}

function goFullScreen() {
    if (videoContainer.requestFullScreen) {
        videoContainer.requestFullscreen();
    } else if (videoContainer.mozRequestFullScreen) {
        videoContainer.mozCancelFullScreen();
    } else if (videoContainer.webkitRequestFullScreen) {
        videoContainer.webkitRequestFullScreen();
    } else if (videoContainer.msRequestFullScreen) {
        videoContainer.msRequestFullScreen();
    }
    fullScrBtn.innerHTML = '<i class="fas fa-compress"></i>';
    fullScrBtn.removeEventListener("click", goFullScreen);
    fullScrBtn.addEventListener("click", exitFullScreen);
};

const formatDate = seconds => {
    const secondsNumber = parseInt(seconds, 10);
    let hours = Math.floor(secondsNumber / 3600);
    let minutes = Math.floor(secondsNumber / 60);
    let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

    if(hours < 10){
        hours = `0${hours}`;
    }
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    if(seconds < 10){
        totalSeconds = `0${totalSeconds}`;
    }
    return `${hours}:${minutes}:${totalSeconds}`;
};

function getCurrentTime(){
    currentTime.innerHTML = formatDate(videoPlayer.currentTime);
};

function setTotalTime(){
    const totalTimeString = formatDate(videoPlayer.duration);
    totalTime.innerHTML = totalTimeString;
    setInterval(getCurrentTime,1000);
};


function init () {
    playBtn.addEventListener("click", handlePlayClick);
    volumeBtn.addEventListener("click", handleVolumeClick);
    fullScrBtn.addEventListener("click", goFullScreen);
    videoPlayer.addEventListener("loadedmetadata", setTotalTime);
};
if(videoContainer){
    init();
};


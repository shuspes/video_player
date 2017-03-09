import VideoPlayer from "./video/index";

function openVideo(input) {
    const videoPlayer = new VideoPlayer();
    videoPlayer.openFile(input);
}

//global scope
window.openVideo = openVideo;

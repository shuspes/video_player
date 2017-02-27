const videoPlayer = $(".js-video-player")[0];

export function playVideoByTime(startTime) {
    videoPlayer.currentTime = startTime;
    videoPlayer.play();
}

function readVideoFile(input) {
    var videoPlayer = $(".js-video-player")[0],
        file = input.files[0],
        type = file.type,
        canPlay = videoPlayer.canPlayType(type);

    if(canPlay == '') {
        console.error("can not play this video!");
        return false;
    }

    var fileURL = URL.createObjectURL(file);
    videoPlayer.src = fileURL;

    videoPlayer.addEventListener("timeupdate", function() {
        var currentTime = videoPlayer.currentTime;
        activateSubtitle(currentTime);
    });
}

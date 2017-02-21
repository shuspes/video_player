function readVideoFile(input) {
    clearAlertMessage(".js-video-errorMessage");

    var videoPlayer = $(".js-video-player")[0],
        file = input.files[0],
        type = file.type,
        canPlay = videoPlayer.canPlayType(type);

    if(canPlay == '') {
        displayErrorMessage(".js-video-errorMessage", "Can not play this file.");
        return;
    }

    var fileURL = URL.createObjectURL(file);
    videoPlayer.src = fileURL;
    $(".js-video-content").addClass("active");

    videoPlayer.addEventListener("timeupdate", function() {
        var currentTime = videoPlayer.currentTime;
        activateSubtitleByTime(currentTime);
    });
}

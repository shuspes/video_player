import {readVideoFile} from "./reader";
// import {getInputFile} from "./scripts/common/getter/fileGetter";

export default class VideoPlayer {
    constructor() {
        this.videoPlayer = $(".js-video-player")[0];
    }

    openFile(input) {
        const file = readVideoFile(input, this.videoPlayer);
        if(file == null)
            return;

        this.videoPlayer.src = URL.createObjectURL(file);
        $(".js-video-content").addClass("active");

        // videoPlayer.addEventListener("timeupdate", function() {
        //     var currentTime = videoPlayer.currentTime;
        //     activateSubtitleByTime(currentTime);
        // });
    }
}

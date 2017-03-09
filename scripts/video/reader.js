// import {clearErrorMessage, displayErrorMessage} from "/scripts/common/errors";
import {getInputFile} from "../common/getter/fileGetter";

export function readVideoFile(input, videoPlayer) {

    const file = getInputFile(input);
    const fileType = file.type;

    if(validateVideoFile(videoPlayer, fileType)) {
        // displayErrorMessage(".js-video-errorMessage", "Can not play this file.");
        return;
    } else {
        // clearErrorMessage(".js-video-errorMessage");
        return file;
    }
}

function validateVideoFile(videoPlayer, fileType) {
    return videoPlayer.canPlayType(fileType) == "";
}

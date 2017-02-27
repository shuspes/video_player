import {playVideoByTime} from "/scripts/video/videoPlayer";
import {createSubtitleMenu} from "/scripts/subtitles/subtitle/menu";

export function renderSubtitle(subtitle) {
    return `<div class="css-subtitle js-subtitle" id="${subtitle.Id}" onClick="${playVideoByTime(subtitle.StartTime)}"
            data-startTime="${subtitle.StartTime}" data-endTime="${subtitle.EndTime}">"
                ${createSubtitleMenu()}
                <span class="css-subtitle-text">
                    ${subtitle.Text}
                </span>"
            </div>`;
}

import {clearErrorMessage, displayWarningMessage} from "/scripts/common/errors";
import {renderSubtitle} from "/scripts/subtitles/subtitle/template";
import {createSubtitles} from "/scripts/addition/SubtitlesParser";
import {readSubtitlesFile} from "/scripts/subtitles/reader";

export function openSubtitles(input) {
    readSubtitlesFile(input);
}

export function activateSubtitleByTime(time) {
    clearErrorMessage(".js-subtitles-errorMessage");

    if ($(".js-subtitles-content").children().length > 0 ) {
        var subtitles = $(".js-subtitle");
        subtitles.removeClass("active");
        var currentSubtitle = subtitles.filter(function () {
                return $(this).attr("data-startTime") < time && $(this).attr("data-endTime") > time;
            });
        currentSubtitle.addClass("active");
    } else {
        displayWarningMessage(".js-subtitles-errorMessage", "Please, load subtitles file.");
    }
}

export function displaySubtitles(subtitles) {
    $(".js-subtitles-content").html(subtitles);
}

export function renderSubtitlesFromFile(subtitlesFromFile) {
    const subtitles = createSubtitles(subtitlesFromFile);
    displaySubtitles(renderSubtitles(subtitles));
}

function renderSubtitles(subtitles) {
    return subtitles.map((subtitle) => {
        return renderSubtitle(subtitle);
    })
}

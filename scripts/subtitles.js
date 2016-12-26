function readSubtitlesFile(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        var fileContent = event.target.result;
        parseSubtitles(fileContent);
    };
    reader.readAsText(file);
}

function parseSubtitles(fileContent) {
    var subtitlesParser = new SubtitlesParser();
    var subtitlesArray = subtitlesParser.subtitlesObjectFromSrt(fileContent);
    createSubtitlesBlock(subtitlesArray);
}

function createSubtitlesBlock(subtitlesArray) {
    var subtitles = createSubtitles(subtitlesArray),
        subtitlesBlock = "<div class=\"css-subtitles-content css-content\">" + subtitles + "</div>";
    $(".js-subtitles-content").html(subtitlesBlock);
}

function createSubtitles(subtitlesArray) {
    var result = "";
    $.each(subtitlesArray, function(index, subtitle) {
        result += "<p class=\"css-subtitle js-subtitle\" id=\"" + subtitle.Id + "\" onClick=\"subtitleClick('" + subtitle.StartTime + "')\" data-startTime=\"" + subtitle.StartTime + "\" data-endTime=\"" + subtitle.EndTime + "\">" +
            subtitle.Text +
            "</p>";
    });
    return result;
}

function subtitleClick(startTime) {
    var videoPlayer = $(".js-video-player")[0];

    videoPlayer.currentTime = startTime;
    videoPlayer.play();
}

function activateSubtitleByTime(time) {
    if ($(".js-subtitles-content").children().length > 0 ) {
        var subtitles = $(".js-subtitle");
        subtitles.removeClass("active");
        var currentSubtitle = subtitles.filter(function () {
                return $(this).attr("data-startTime") < time && $(this).attr("data-endTime") > time;
            });
        currentSubtitle.addClass("active");
    } else {
        console.error("load subtitles file");
    }
}

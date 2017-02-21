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
        result += "<div class=\"css-subtitle js-subtitle\" id=\"" + subtitle.Id + "\" onClick=\"subtitleClick('" + subtitle.StartTime + "')\" data-startTime=\"" + subtitle.StartTime + "\" data-endTime=\"" + subtitle.EndTime + "\">" +
            createSubtitleMenu() +
            "<span class='css-subtitle-text'>" + subtitle.Text + "</span>" +
            "</div>";
    });
    return result;
}

function createSubtitleMenu() {
    return "<div class=\"css-subtitle-menu\">" +
               "<i class=\"fa fa-bars css-subtitle-menuIcon\"></i>" +
               "<div class=\"css-subtitle-menuContent\">" +
                    "<i class=\"fa fa-retweet css-subtitle-menuContent-icon\"></i>" +
                    "<i class=\"fa fa-google css-subtitle-menuContent-icon\"></i>" +
               "</div>" +
               "<div class=\"css-subtitle-menu-background\"></div>" +
           "</div>";
}

function subtitleClick(startTime) {
    var videoPlayer = $(".js-video-player")[0];

    videoPlayer.currentTime = startTime;
    videoPlayer.play();
}

function activateSubtitleByTime(time) {
    clearAlertMessage(".js-subtitles-errorMessage");

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

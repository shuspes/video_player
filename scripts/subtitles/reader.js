import {renderSubtitlesFromFile} from "/scripts/subtitles";

export function readSubtitlesFile(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        var fileContent = event.target.result;
        renderSubtitlesFromFile(fileContent);
    };
    reader.readAsText(file);
}

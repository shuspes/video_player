import Subtitle from "/scripts/subtitles/subtitle";

export function createSubtitles(subtitlesFromFile) {
    const subtitlesString = subtitlesFromFile.replace(/\r/g, '');
    const regex = /(\d+)\n(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/g;
    const subtitles = subtitlesString.split(regex);
    subtitles.shift();

    let subtitlesObject = [];
    for (var i = 0; i < subtitles.length; i += 4) {
        subtitlesObject.push(new Subtitle(
            subtitles[i].trim(), //Id
            subtitles[i + 3].trim(), //Text
            timeInSeconds(subtitles[i + 1].trim()), //StartTime
            timeInSeconds(subtitles[i + 2].trim()), //EndTime
        ));
    }
    return subtitlesObject;
}

timeInSeconds(val) {
    const regex = /(\d+):(\d{2}):(\d{2}),(\d{3})/;
    const parts = regex.exec(val);

    if (parts === null) {
        return 0;
    }

    for (var i = 1; i < 5; i++) {
        parts[i] = parseInt(parts[i], 10);
        if (isNaN(parts[i])) parts[i] = 0;
    }

    // hours + minutes + seconds + ms
    return parts[1] * 3600 + parts[2] * 60 + parts[3] + parts[4] / 1000;
}

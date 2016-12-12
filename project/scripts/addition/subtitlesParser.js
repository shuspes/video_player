function SubtitlesParser() {
}

SubtitlesParser.prototype = {
    subtitlesObjectFromSrt: function(data, useSeconds = false) {
        data = data.replace(/\r/g, '');
        var regex = /(\d+)\n(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/g;
        data = data.split(regex);
        data.shift();

        var items = [];
        for (var i = 0; i < data.length; i += 4) {
            items.push({
                Id: data[i].trim(),
                StartTime: useSeconds ? this.timeSeconds(data[i + 1].trim()) : data[i + 1].trim(),
                EndTime: useSeconds ? this.timeSeconds(data[i + 2].trim()) : data[i + 2].trim(),
                Text: data[i + 3].trim()
            });
        }

        return items;
    },
    timeSeconds: function(val) {
        var regex = /(\d+):(\d{2}):(\d{2}),(\d{3})/;
        var parts = regex.exec(val);

        if (parts === null) {
            return 0;
        }

        for (var i = 1; i < 5; i++) {
            parts[i] = parseInt(parts[i], 10);
            if (isNaN(parts[i])) parts[i] = 0;
        }

        // hours + minutes + seconds + ms
        return parts[1] * 3600 + parts[2] * 60 + parts[3] + parts[4] / 1000;
    },
}

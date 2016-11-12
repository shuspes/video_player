// window.onload=function(){
// (function localFileVideoPlayerInit(win) {
//     var URL = win.URL || win.webkitURL,
//         displayMessage = (function displayMessageInit() {
//             var node = document.querySelector('#message');
//
//             return function displayMessage(message, isError) {
//                 node.innerHTML = message;
//                 node.className = isError ? 'error' : 'info';
//             };
//         }()),
//         playSelectedFile = function playSelectedFileInit(event) {
//             var file = this.files[0];
//
//             var type = file.type;
//
//             var videoNode = document.querySelector('video');
//
//             var canPlay = videoNode.canPlayType(type);
//
//             canPlay = (canPlay === '' ? 'no' : canPlay);
//
//             var message = 'Can play type "' + type + '": ' + canPlay;
//
//             var isError = canPlay === 'no';
//
//             displayMessage(message, isError);
//
//             if (isError) {
//                 return;
//             }
//
//             var fileURL = URL.createObjectURL(file);
//
//             videoNode.src = fileURL;
//         },
//         inputNode = document.querySelector('input');
//
//     if (!URL) {
//         displayMessage('Your browser is not ' +
//            '<a href="http://caniuse.com/bloburls">supported</a>!', true);
//
//         return;
//     }
//
//     inputNode.addEventListener('change', playSelectedFile, false);
// }(window));
//   var v = document.getElementById("myVideo");
//   var p = document.getElementById("pbr");
//   var c = document.getElementById("currentPbr");
//
//   p.addEventListener('input',function(){
//     c.innerHTML = p.value;
//     v.playbackRate = p.value;
//   },false);
//
// }

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
    console.log(subtitlesArray);
}

function createSubtitlesBlock(subtitlesArray) {
    var subtitlesBlock = subtitlesArray.map(function(subtitle, index) {
        return createSubtitle(subtitle);
    });
    $(".js-subtitles-player").append(subtitlesBlock);
}

function createSubtitle(subtitle) {
    return $("<span class=\"css-subtitle\" data-startTime=\"" + subtitle.StartTime + "\" data-endTime=\"" + subtitle.EndTime + "\">" +
        subtitle.Text +
        "</span>");
}

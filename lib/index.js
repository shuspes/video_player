/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reader__ = __webpack_require__(2);

// import {getInputFile} from "./scripts/common/getter/fileGetter";

class VideoPlayer {
    constructor() {
        this.videoPlayer = $(".js-video-player")[0];
    }

    openFile(input) {
        const file = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reader__["a" /* readVideoFile */])(input, this.videoPlayer);
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
/* harmony export (immutable) */ __webpack_exports__["a"] = VideoPlayer;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getInputFile;
function getInputFile(input) {
    return input.files[0];
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_getter_fileGetter__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = readVideoFile;
// import {clearErrorMessage, displayErrorMessage} from "/scripts/common/errors";


function readVideoFile(input, videoPlayer) {

    const file = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_getter_fileGetter__["a" /* getInputFile */])(input);
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__video_index__ = __webpack_require__(0);


function openVideo(input) {
    const videoPlayer = new __WEBPACK_IMPORTED_MODULE_0__video_index__["a" /* default */]();
    videoPlayer.openFile(input);
}

//global scope
window.openVideo = openVideo;


/***/ })
/******/ ]);
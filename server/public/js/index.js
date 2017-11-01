/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 单步操作
{
    var ajax = function ajax(callback) {
        console.log("执行1");
        setTimeout(function () {
            callback && callback.call(); // 经典写法
        }, 1000);
    };

    ajax(function () {
        console.log("timeout1");
    });
}

{
    var _ajax = function _ajax() {
        console.log("执行2");
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        });
    };

    _ajax().then(function () {
        console.log("promise", "timeout2");
    });
}

// 多步操作
{
    var _ajax2 = function _ajax2() {
        console.log("执行3");
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        });
    };

    _ajax2().then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 2000);
        });
    }).then(function () {
        console.log("timeout3");
    });
}

// 捕获错误catch
{
    var _ajax3 = function _ajax3(num) {
        console.log("执行4");
        return new Promise(function (resolve, reject) {
            if (num < 5) {
                resolve();
            } else {
                throw new Error("出错了");
            }
        });
    };

    _ajax3(6).then(function () {
        console.log("log", 6);
    }).catch(function (err) {
        console.log("catch", err);
    });
}

// all方法，3张图都加在完毕后再添加到页面中
{
    // 加载图片的函数
    var loadImg = function loadImg(src) {
        return new Promise(function (resolve, reject) {
            var img = document.createElement("img");
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function (err) {
                reject(err);
            };
        });
    };

    var showImgs = function showImgs(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img);
        });
    };

    // Promise.all([
    //     loadImg("http://i4.buimg.com/567571/df1ef0720bea6832.png"),
    //     loadImg("http://i4.buimg.com/567571/2b07ee25b08930ba.png"),
    //     loadImg("http://i4.buimg.com/567771/5eb8190d6b2a1c9c.png")
    // ]).then(showImgs)

}

// race方法，3个任意完成就添加到页面中
{
    var _loadImg = function _loadImg(src) {
        return new Promise(function (resolve, reject) {
            var img = document.createElement("img");
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function (err) {
                reject(err);
            };
        });
    };

    var _showImgs = function _showImgs(img) {
        var p = document.createElement("p");
        p.appendChild(img);
        document.body.appendChild(p);
        // imgs.forEach(function (img) {
        //     document.body.appendChild(img)
        // })
    };

    // 其他两个即便加载完毕也不会触发


    Promise.race([_loadImg("http://i4.buimg.com/567571/df1ef0720bea6832.png"), _loadImg("http://i4.buimg.com/567571/2b07ee25b08930ba.png"), _loadImg("http://i4.buimg.com/567771/5eb8190d6b2a1c9c.png")]).then(_showImgs);
}

/***/ })
/******/ ]);
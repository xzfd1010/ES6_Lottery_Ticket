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


{
    /**
     * 构造函数
     * flags、sticky
     * y修饰符、g修饰符的特点
     * u修饰符的使用
     * s修饰符的作用
     */
}
{
    // 构造函数
    // ES5中的写法
    var regex = new RegExp('xyz', 'i'); // 字符串，修饰符
    var regex2 = new RegExp(/xyz/i); // 直接正则

    console.log(regex.test('xyz123'), regex2.test('xyz123'));

    // ES6中构造函数
    var regex3 = new RegExp(/xyz/ig, 'i'); // 可以是两个参数，es6中的第二个参数可以覆盖前面的正则表达式的修饰符
    console.log(regex3.flags); // regex.flags可以获取修饰符
}

{
    // 都是全局匹配
    // g修饰符从上一次匹配的位置开始寻找，进行匹配
    // y修饰符必须从上一次匹配的第一个字符开始匹配
    var s = 'bbb_bb_b';
    var a1 = /b+/g;
    var a2 = new RegExp('b+', 'y');

    console.log('one', a1.exec(s), a2.exec(s));
    console.log('two', a1.exec(s), a2.exec(s));

    // sticky查看是否开启了y匹配的方式
    console.log(a1.sticky, a2.sticky);
}

{
    // u修饰符 Unicode缩写，在正则处理Unicode字符时的特征值
    console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A')); // 没加的话，会把当成2个字符
    console.log('u-2', /^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('\uD83D\uDC2A')); // 加了，当成一个字符

    console.log(/\u{61}/.test('a'));
    console.log(/a/.test('a')); // 如果中间是一个Unicode编码，需要添加u修饰符，进行转码

    // .字符只能识别 <0xffff  如果编码超过2个字节，无法识别

    console.log('\uD842\uDFB7');

    var char = '𠮷';

    console.log('u-1', /^.$/.test(char));
    console.log('u-2', /^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(char));

    console.log('test-1', /𠮷{2}/.test('𠮷𠮷'));
    console.log('test-2', /(?:\uD842\uDFB7){2}/.test('𠮷𠮷'));
}

{
    //s修饰符

    // .不能处理 换行符 回车符 行分隔符 段分隔符

    // 提案
}

/***/ })
/******/ ]);
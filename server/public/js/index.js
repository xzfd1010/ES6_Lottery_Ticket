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


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
    // 简洁表示法
    var o = 1;
    var k = 2;
    var es5 = {
        o: o,
        k: k
    };

    var es6 = {
        o: o, k: k
    };
    console.log('es5', es5);
    console.log('es6', es6);

    // 内有方法的对象
    var es5_method = {
        hello: function hello() {
            console.log('hello');
        }
    };

    var es6_method = {
        hello: function hello() {
            console.log('hello');
        }
    };

    console.log('es5_method', es5_method);
    console.log('es6_method', es6_method);

    // get set
    var cart = {
        _wheels: 4,

        get wheels() {
            return this._wheels;
        },

        set wheels(value) {
            if (value < this._wheels) {
                throw new Error('数值太小了！');
            }
            this._wheels = value;
        }
    };
    console.log(cart.wheels);
}

{
    // 属性表达式
    var a = 'b';
    var es5_obj = {
        a: 'c',
        b: 'c'
    };

    // key 可以是表达式（变量）
    var es6_obj = _defineProperty({}, a, 'c');

    console.log('es5_obj', es5_obj);
    console.log('es6_obj', es6_obj);
}

{
    // 新增API，is判断两个对象是否完全相等，相当于===，但能够处理NaN !== NaN的情况
    console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc');
    // 数组是引用类型对象，地址不相同
    console.log('数组', Object.is([], []), [] === []);

    // Object.assign，浅拷贝
    console.log('拷贝', Object.assign({ a: 'a' }, // 目标对象
    { b: 'b' // 需要拷贝的值
    }));

    // entries,values支持比较差
    var test = { k: 123, o: 456 };
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.entries(test)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            console.log([key, value]);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

{
    var _console;

    // 扩展运算符
    var _a$b$c = { a: 'test', b: 'kill', c: 'ddd' },
        _a = _a$b$c.a,
        b = _a$b$c.b,
        c = _a$b$c.c;

    console.log('c', c);
    (_console = console).log.apply(_console, [1, 2, 3]);

    // babel

    var _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 },
        x = _x$y$a$b.x,
        y = _x$y$a$b.y,
        z = _objectWithoutProperties(_x$y$a$b, ['x', 'y']);

    console.log('x,y,z,', x, y, z);
}

/***/ })
/******/ ]);
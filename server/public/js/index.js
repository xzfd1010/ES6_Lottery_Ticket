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


// import { map, takeWhile, forEach } from "iterlib";
{
    // 默认值后面不能再有没有默认值的变量
    // 比如y后面不能有无默认值的c
    var test = function test(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';

        console.log('默认值', x, y);
    };

    test('hello');
    test('hello', 'kill');
}

{
    var test2 = function test2(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

        console.log('作用域', x, y);
    };

    var bar = function bar() {
        var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
            return foo;
        };

        var foo = 'inner';
        console.log(func());
    };

    var x = 'test';

    test2('kill'); //'kill'对应x，y=x现在自己的作用域中找x的值，再向上一级作用域查找

    var foo = 'outer';

    bar(); // outer
}

{
    //rest参数， args后面不可以再有其他参数
    var test3 = function test3() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var v = _step.value;

                console.log('rest', v);
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
    };

    test3(1, 2, 3, 4);
}

{
    var _console, _console2;

    // 扩展运算符
    (_console = console).log.apply(_console, [1, 2, 3]);
    (_console2 = console).log.apply(_console2, ['a'].concat([1, 2, 3]));
}

{
    // 箭头函数，函数名，函数参数，函数返回值
    var arrow = function arrow(v) {
        return v * 2;
    };
    console.log('arrow', arrow(2));

    var arrow2 = function arrow2() {
        return 5;
    };
    console.log(arrow2());

    // 箭头函数的使用根据业务场景使用
}

{
    // 尾调用，函数式编程，函数的最后一句话是不是一句函数？
    var tail = function tail(x) {
        console.log('tail', x);
    };

    var fx = function fx(x) {
        return tail(x);
    };

    fx(123);

    // 尾调用的好处：提升性能，递归涉及到函数地址嵌套，相当耗费资源；
}

{
    /**
     * reduce
     *    prev：前一个值
     *    cur：当前值
     *    index：索引
     *    array：数组对象
     */

    var pipeline = function pipeline() {
        for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            funcs[_key2] = arguments[_key2];
        }

        return function (val) {
            return funcs.reduce(function (a, b) {
                return b(a);
            }, val);
        };
    };

    var pipeline2 = function pipeline2() {
        for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            funcs[_key3] = arguments[_key3];
        }

        return function (val) {
            return funcs.reduce(function (a, b) {
                return b(a);
            }, val);
        };
    };

    var plus1 = function plus1(a) {
        return a + 1;
    };
    var mult2 = function mult2(a) {
        return a * 2;
    };
    var addThenMult = pipeline2(plus1, mult2);

    console.log(addThenMult(5));
}

{
    var m1 = function m1() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$x = _ref.x,
            x = _ref$x === undefined ? 0 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 0 : _ref$y;

        console.log([x, y]);
    };

    m1({ x: 0, y: undefined });
}
{
    var m2 = function m2() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 },
            x = _ref2.x,
            y = _ref2.y;

        console.log([x, y]);
    };

    m2({ x: 0, y: undefined });
}

/***/ })
/******/ ]);
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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 创建
{
    // 参数对象
    var obj = {
        toString: function toString() {
            return 'abc';
        }
    };
    var sym = Symbol(obj);
    console.log(sym); // Symbol(abc)
}
// 转换
{
    var _sym = Symbol('My symbol');
    // console.log("your symbol is " + sym)
    console.log("your symbol is " + _sym.toString()); //只能显示转为字符串
    console.log("Boolean:", Boolean(_sym));
}
// 独一无二
{
    // 声明,a1和a2不可能相等
    var a1 = Symbol();
    var a2 = Symbol();
    console.log(a1 === a2);
}
// 作为对象属性
{
    var mySymbol = Symbol();
    // 第一种写法
    var a = {};
    a[mySymbol] = 'Hello!';
    // 第二种写法
    var b = _defineProperty({}, mySymbol, 'Hello!');
    // 第三种写法
    var c = {};
    Object.defineProperty(c, mySymbol, { value: 'Hello!' });
    // 以上写法都得到同样结果
    console.log(a[mySymbol]); // "Hello!"
    console.log(b[mySymbol]); // "Hello!"
    console.log(c[mySymbol]); // "Hello!"
}
// 消除魔术字符串
{
    var getArea = function getArea(shape, options) {
        var area = 0;
        switch (shape) {
            case shapeType.triangle:
                area = .5 * options.width * options.height;
                break;
        }
        return area;
    };

    var shapeType = {
        triangle: Symbol()
    };

    var area = getArea(shapeType.triangle, { width: 100, height: 100 });
    console.log(area);
}

// 遍历
{
    var _obj2;

    var _a = Symbol.for('abc');
    var _obj = (_obj2 = {}, _defineProperty(_obj2, _a, '123'), _defineProperty(_obj2, 'abc', 345), _defineProperty(_obj2, 'c', 456), _obj2);
    // 如果有symbol做key值，通过for in 和let of都拿不到其属性
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.entries(_obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            console.log('let of', key, value);
        }

        // 解决办法，获取用symbol作为key值的属性的对象
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

    Object.getOwnPropertySymbols(_obj).forEach(function (item) {
        console.log(_obj[item]);
    });

    // Reflect ownkeys，取到所有的key value值，直接调用forEach即可进行操作
    Reflect.ownKeys(_obj).forEach(function (item) {
        console.log('ownkeys', item, _obj[item]);
    });
}

// symbol.for
{
    // a3是key值，查看此key是否在全局注册过，如果注册过就返回这个值，如果没有，就生成
    var a3 = Symbol.for('a3');
    var a4 = Symbol.for('a3');
    console.log(a3 === a4);

    var _a2 = Symbol("a1");
    var _a3 = Symbol.for("a1");
    console.log(_a2 === _a3);
}

// symbol.keyFor
{
    var s1 = Symbol.for("foo");
    console.log("s1", Symbol.keyFor(s1)); // "foo"
    var s2 = Symbol("foo"); // 未登记
    console.log("s2", Symbol.keyFor(s2)); // undefined
}
// hasInstance
{
    var MyClass = function () {
        function MyClass() {
            _classCallCheck(this, MyClass);
        }

        _createClass(MyClass, [{
            key: Symbol.hasInstance,
            value: function value(foo) {
                return foo instanceof Array;
            }
        }]);

        return MyClass;
    }();

    console.log([1, 2, 3] instanceof new MyClass()); // true

    // 自定义偶数类

    var Even = function () {
        function Even() {
            _classCallCheck(this, Even);
        }

        _createClass(Even, null, [{
            key: Symbol.hasInstance,
            value: function value(obj) {
                return Number(obj) % 2 === 0;
            }
        }]);

        return Even;
    }();

    console.log(1 instanceof Even); // false
    console.log(2 instanceof Even); // true
    console.log(12345 instanceof Even); // false
}

/***/ })
/******/ ]);
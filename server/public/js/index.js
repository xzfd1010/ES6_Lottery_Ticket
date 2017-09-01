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

{
    var list = new Set();
    list.add(5); // list中添加元素
    list.add(7);

    console.log('size', list.size); //list.size属性代表长度
}

{
    // 数组转为set
    var arr = [1, 2, 3, 4, 5];
    var _list = new Set(arr);
    console.log('size', _list.size);
    console.log(_list);
}

{
    // set中的变量是唯一的，此特性可用于去重
    var _list2 = new Set();
    _list2.add(1);
    _list2.add(2);
    _list2.add(1); // 没有成功添加

    console.log('list', _list2);

    var _arr = [1, 2, 3, 1, 2];
    var list2 = new Set(_arr);

    console.log('unique', list2);
    // 转换元素时不会进行类型转化，比如'2'和2是不同的
}

{
    var _arr2 = ['add', 'delete', 'clear', 'has'];
    var _list3 = new Set(_arr2);

    console.log('has', _list3.has('add'));
    console.log('delete', _list3.delete('add'), _list3);
    _list3.clear();
    console.log(_list3);
}

{
    var _arr3 = ['add', 'delete', 'clear', 'has'];
    var _list4 = new Set(_arr3);

    // key和value是相同的
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _list4.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            console.log('key', key);
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

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = _list4.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var value = _step2.value;

            console.log('value', value);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = _list4.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _step3$value = _slicedToArray(_step3.value, 2),
                _key = _step3$value[0],
                _value = _step3$value[1];

            console.log('entry', _key, _value);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    _list4.forEach(function (item) {
        console.log(item);
    });
}

{
    // weakSet
    /** 与set的区别
     *  weakSet和set支持的元素不同，weakSet只支持对象；
     *  weakSet中的对象都是弱引用，不会检测是否被垃圾回收掉了
     *  没有size属性及clear方法，不能遍历
     */
    var weakList = new WeakSet();
    var arg = {};
    weakList.add(arg);
    // weakList.add(2); 报错

    console.log('weakList', weakList);
}

{
    // map定义方式1
    var map = new Map();
    var _arr4 = ['123'];

    // set添加元素用add，map添加元素用set
    // 此处arr是key
    map.set(_arr4, 456);
    console.log('map', map, map.get(_arr4));
}

{
    // map定义方式2
    var _map = new Map([['a', 123], ['b', 456]]);
    console.log('map args', _map);
    console.log('map size', _map.size);
    console.log('delete', _map.delete('a'), _map);
    console.log('clear', _map.clear(), _map);
}

{
    // weakMap
    /**
     * key值必须是对象
     * 没有set属性，不能使用clear
     * 不能遍历
     */
    var weakmap = new WeakMap();
    var o = {};
    weakmap.set(o, 123);
    console.log(weakmap.get(o));
}

/***/ })
/******/ ]);
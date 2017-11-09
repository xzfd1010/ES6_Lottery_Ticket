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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// set map
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

    console.log('unique', Array.from(list2));
    // 转换元素时不会进行类型转化，比如'2'和2是不同的
}
// 遍历
{
    // foreach遍历
    var set = new Set([1, 4, 9]);
    set.forEach(function (value, key) {
        return console.log(key + ' : ' + value);
    });
}
{
    var _arr2 = ['add', 'delete', 'clear', 'has'];
    var _list3 = new Set(_arr2);

    console.log('has', _list3.has('add'));
    console.log('delete', _list3.delete('add'), _list3);
    _list3.clear();
    console.log(_list3);
}
// 并集、交集、差集
{
    var a = new Set([1, 2, 3]);
    var b = new Set([4, 3, 2]);
    // 并集
    var union = new Set([].concat(_toConsumableArray(a), _toConsumableArray(b))); // 合并 + 去重
    console.log("并集", union);
    // Set {1, 2, 3, 4}
    // 交集
    var intersect = new Set([].concat(_toConsumableArray(a)).filter(function (x) {
        return b.has(x);
    })); // filter只返回a、b中都包含的元素
    console.log("交集", intersect);
    // set {2, 3}
    // 差集
    var difference = new Set([].concat(_toConsumableArray(a)).filter(function (x) {
        return !b.has(x);
    }).concat([].concat(_toConsumableArray(b)).filter(function (x) {
        return !a.has(x);
    }))); // 返回b中不包含的元素
    console.log("补集", difference);
    // Set {1}
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
// map
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

{
    // map-array，数据结构横向对比，增删改查
    var _map2 = new Map();
    var array = [];

    // 增
    _map2.set('t', 1);
    array.push({ t: 1 });

    console.info('map-array', _map2, array);

    // 查
    var map_exist = _map2.has('t'); // map查询，存在返回true
    var array_exist = array.find(function (item) {
        return item.t;
    }); // 存在，返回值
    console.info('map-array', map_exist, array_exist);

    // 改
    _map2.set('t', 2); //修改比较简单，set(key,value)
    array.forEach(function (item) {
        return item.t ? item.t = 2 : '';
    }); // 遍历，修改值
    console.log('map-array-modify', _map2, array);

    // 删除
    _map2.delete('t'); //map
    var index = array.findIndex(function (item) {
        return item.t;
    }); //找到值的索引
    array.splice(index, 1); //利用splice删除
    console.info('map-array', _map2, array);
}
// 
{
    // set和array的对比
    var _set = new Set();
    var _array = [];

    // 增
    _set.add({ t: 1 });
    _array.push({ t: 1 });
    console.info('set-array', _set, _array);

    // 查
    var set_exist = _set.has({ t: 1 }); //也是has方法，此处是false，因为对象的引用不同，只有保存成变量才能查到
    var _array_exist = _array.find(function (item) {
        return item.t;
    });
    console.info('set-array', set_exist, _array_exist);

    // 改
    _set.forEach(function (item) {
        return item.t ? item.t = 2 : '';
    }); //通过属性查找，存在则修改值
    _array.forEach(function (item) {
        return item.t ? item.t = 2 : '';
    });
    console.info('set-array-modify', _set, _array);

    // 删
    _set.forEach(function (item) {
        return item.t ? _set.delete(item) : '';
    }); // 需要找到值，才能删除
    var _index = _array.findIndex(function (item) {
        return item.t;
    }); //找到值的索引
    _array.splice(_index, 1);
    console.info('map-array', _set, _array);
}

{
    // map、set和obj的对比
    var item = { t: 1 };
    var _map3 = new Map();
    var _set2 = new Set();
    var obj = {};

    // 增
    _map3.set('t', 1);
    _set2.add(item);
    obj['t'] = 1;
    console.info('map-set-obj', obj, _map3, _set2);

    // 查，map和set语义化更好
    console.info({
        map_exist: _map3.has('t'),
        set_exist: _set2.has(item),
        obj_exist: 't' in obj
    });

    // 改
    _map3.set('t', 2);
    item.t = 2; // 有引用修改数据本身，否则forEach查找
    obj['t'] = 2;
    console.info('map-set-obj-modify', obj, _map3, _set2);

    // 删除
    _map3.delete('t');
    _set2.delete(item); // 无引用则需要forEach删除
    delete obj['t'];
    console.info('map-set-obj-empty', obj, _map3, _set2);

    // 能使用map，不使用数组
    // 优先使用map，如果要保证唯一性set，
}

/***/ })
/******/ ]);
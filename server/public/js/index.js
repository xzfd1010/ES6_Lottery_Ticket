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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Proxy
{
    // 原始对象存储数据
    var obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };

    // 代理商：通过代理限制用户对于原始对象的修改
    // 参数（原始对象，操作）
    // 常用方法：get/set/has/deleteProperty/ownKeys
    var monitor = new Proxy(obj, {
        // 拦截对象属性的读取
        get: function get(target, key) {
            return target[key].replace('2017', '2018'); // 将所有的2017替换为2018
        },

        // 拦截对象设置属性
        set: function set(target, key, value) {
            // 此时只允许修改name
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },

        // 拦截key in object操作
        has: function has(target, key) {
            // 只暴露name属性
            if (key === 'name') {
                return target[key];
            } else {
                return false;
            }
        },

        // 拦截delete
        deleteProperty: function deleteProperty(target, key) {
            // 以下划线开头的允许删除
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },

        // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys: function ownKeys(target) {
            return Object.keys(target).filter(function (item) {
                return item !== 'time';
            });
        }
    });

    // 用户访问monitor，不管用户通过读取还是设置monitor的属性，最后再通过proxy传递给obj
    console.log('get', monitor.time);

    monitor.time = '2018';
    monitor.name = 'nick';
    console.log('set', monitor.time, monitor);
    console.log('has', 'name' in monitor, 'time' in monitor);

    // delete monitor.time;
    // console.log('delete', monitor);
    //
    // delete monitor._r;
    // console.log('delete', monitor);

    console.log('ownKeys', Object.keys(monitor));
}
// 链式操作
{
    var pipe = function () {
        return function (value) {
            var funcStack = []; // 数组，用于保存需要对val执行的函数
            var oproxy = new Proxy({}, {
                get: function get(pipeObject, fnName) {
                    if (fnName === 'get') {
                        return funcStack.reduce(function (val, fn) {
                            // fn是遍历funcStack的每一项，依次对val执行，执行get的时候，返回值
                            return fn(val);
                        }, value);
                    }
                    funcStack.push(window[fnName]);
                    return oproxy;
                }
            });
            return oproxy;
        };
    }();
    console.log(pipe(3));
    var double = function double(n) {
        return n * 2;
    };
    var pow = function pow(n) {
        return n * n;
    };
    var reverseInt = function reverseInt(n) {
        return n.toString().split("").reverse().join("") | 0;
    }; // |0的作用是转为整数
    // pipe(3).double.pow.reverseInt.get; // 63 babel还不识别
}

// 拦截对象读取
{
    var proto = new Proxy({}, {
        get: function get(target, propertyKey, receiver) {
            // console.log('GET ' + propertyKey);
            return target[propertyKey];
        }
    });
    var _obj = Object.create(proto);
    console.log(_obj);
    console.log(_obj.foo); // "GET foo"
}

// apply
{
    var target = function target() {
        return 'I am the target';
    };
    var handler = {
        apply: function apply() {
            return 'I am the proxy';
        }
    };
    var p = new Proxy(target, handler);
    // p()
    // "I am the proxy"
}
{
    // Reflect和Proxy的参数一致，使用方法一致
    var _obj2 = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };

    console.log('Reflect get', Reflect.get(_obj2, 'time'));
    Reflect.set(_obj2, 'name', 'reflect');
    console.log(_obj2);
    console.log('has', Reflect.has(_obj2, 'name'));
}

{
    // 适用场景：数据类型的校验，和业务解耦的校验模块
    var validator = function validator(target, _validator) {
        return new Proxy(target, {
            _validator: _validator,
            set: function set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    var va = this._validator[key]; // 获取key相对应的校验方法
                    if (!!va(value)) {
                        return Reflect.set(target, key, value, proxy);
                    } else {
                        throw Error('\u4E0D\u80FD\u8BBE\u7F6E' + key + '\u5230' + value);
                    }
                } else {
                    throw Error(key + ' \u4E0D\u5B58\u5728');
                }
            }
        });
    };

    var personValidators = {
        name: function name(val) {
            return typeof val === 'string';
        },
        age: function age(val) {
            return typeof val === 'number' && val > 18;
        },
        mobile: function mobile(val) {}
    };

    var Person = function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
        this.mobile = '1111';
        return validator(this, personValidators); // 返回的是一个包含validator的proxy
    };

    var person = new Person('nick', 25);

    console.log(person);

    person.name = 'arron';

    console.log(person);
}

/***/ })
/******/ ]);
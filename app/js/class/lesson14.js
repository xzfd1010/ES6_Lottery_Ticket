//iterator
// 数组实现好的
{
    let arr = ["hello", "world"]
    let iterator = arr[Symbol.iterator]()
    console.log(iterator)
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
}

// 自定义iterator
{
    let obj = {
        start: [1, 3, 2],
        end: [7, 9, 8],
        [Symbol.iterator]() {
            let self = this
            let index = 0
            let arr = self.start.concat(self.end) // 数组合并
            let len = arr.length
            return {
                next() {
                    if (index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    };

    for (let key of obj) {
        console.log(key)
    }
}

// for...of 循环
{
    let arr = ["hello", "world"]
    for (let value of arr) {
        console.log("value", value)
    }
}

// 字符串的iterator接口
{
    let str = new String("hi");
    console.log([...str]); // ["h", "i"]
    str[Symbol.iterator] = function () {
        return {
            next: function () {
                if (this._first) {
                    this._first = false;
                    return {value: "bye", done: false};
                } else {
                    return {done: true};
                }
            },
            _first: true
        };
    };
    console.log([...str]); // ["bye"]
    console.log(str); // "hi"

}
// Set和Map的for...of
{
    // Set结构
    let engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
    for (let e of engines) {
        console.log(e);
    }
    // Map结构
    let es6 = new Map();
    es6.set("edition", 6);
    es6.set("committee", "TC39");
    es6.set("standard", "ECMA-262");
    for (let [name, value] of es6) {
        console.log(name + ": " + value);
    }

}
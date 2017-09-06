{
    // 简洁表示法
    let o = 1;
    let k = 2;
    let es5 = {
        o: o,
        k: k
    };

    let es6 = {
        o, k
    };
    console.log('es5', es5);
    console.log('es6', es6);

    // 内有方法的对象
    let es5_method = {
        hello: function () {
            console.log('hello');
        }
    };

    let es6_method = {
        hello() {
            console.log('hello');
        }
    };


    console.log('es5_method', es5_method);
    console.log('es6_method', es6_method);

    // get set
    let cart = {
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
    let a = 'b';
    let es5_obj = {
        a: 'c',
        b: 'c'
    };

    // key 可以是表达式（变量）
    let es6_obj = {
        [a]: 'c'
    };

    console.log('es5_obj', es5_obj);
    console.log('es6_obj', es6_obj);
}

{
    // 新增API，is判断两个对象是否完全相等，相当于===，但能够处理NaN !== NaN的情况
    console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc');
    // 数组是引用类型对象，地址不相同
    console.log('数组', Object.is([], []), [] === []);

    // Object.assign，浅拷贝
    console.log('拷贝', Object.assign(
        {a: 'a'}, // 目标对象
        {b: 'b'}  // 需要拷贝的值
    ));

    // entries,values支持比较差
    let test = {k: 123, o: 456};
    for (let [key, value] of Object.entries(test)) {
        console.log([key, value]);
    }
}

{
    // 扩展运算符
    let {a, b, c} = {a: 'test', b: 'kill', c: 'ddd'};
    console.log('c', c);
    console.log(...[1, 2, 3])

    // babel
    let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
    console.log('x,y,z,', x, y, z)
}
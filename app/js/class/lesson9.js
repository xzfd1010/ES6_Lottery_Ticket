// 创建
{
    // 参数对象
    const obj = {
        toString() {
            return 'abc';
        }
    };
    const sym = Symbol(obj);
    console.log(sym) // Symbol(abc)
}
// 转换
{
    let sym = Symbol('My symbol');
    // console.log("your symbol is " + sym)
    console.log("your symbol is " + sym.toString()) //只能显示转为字符串
    console.log("Boolean:",Boolean(sym))
}
// 独一无二
{
    // 声明,a1和a2不可能相等
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2);

}
// 作为对象属性
{
    let mySymbol = Symbol();
    // 第一种写法
    let a = {};
    a[mySymbol] = 'Hello!';
    // 第二种写法
    let b = {
        [mySymbol]: 'Hello!'
    };
    // 第三种写法
    let c = {};
    Object.defineProperty(c, mySymbol, { value: 'Hello!' });
    // 以上写法都得到同样结果
    console.log(a[mySymbol]) // "Hello!"
    console.log(b[mySymbol]) // "Hello!"
    console.log(c[mySymbol]) // "Hello!"
}
// 消除魔术字符串
{
    const shapeType = {
        triangle: Symbol()
    };
    function getArea(shape, options) {
        let area = 0;
        switch (shape) {
            case shapeType.triangle:
                area = .5 * options.width * options.height;
                break;
        }
        return area;
    }
    let area = getArea(shapeType.triangle, { width: 100, height: 100 });
    console.log(area)
}

// 遍历
{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]:'123',
        'abc':345,
        'c':456
    };
    // 如果有symbol做key值，通过for in 和let of都拿不到其属性
    for(let [key,value] of Object.entries(obj)){
        console.log('let of', key, value);
    }

    // 解决办法，获取用symbol作为key值的属性的对象
    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);
    });

    // Reflect ownkeys，取到所有的key value值，直接调用forEach即可进行操作
    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownkeys', item, obj[item]);
    });
}

// symbol.for
{
    // a3是key值，查看此key是否在全局注册过，如果注册过就返回这个值，如果没有，就生成
    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(a3 === a4);

    let a1 = Symbol("a1")
    let a2 = Symbol.for("a1")
    console.log(a1 === a2)
}

// symbol.keyFor
{
    let s1 = Symbol.for("foo");
    console.log("s1",Symbol.keyFor(s1)) // "foo"
    let s2 = Symbol("foo"); // 未登记
    console.log("s2",Symbol.keyFor(s2)) // undefined
}
// hasInstance
{
    class MyClass {
        [Symbol.hasInstance](foo) {
            return foo instanceof Array;
        }
    }
    console.log([1, 2, 3] instanceof new MyClass()) // true

    // 自定义偶数类
    class Even {
        static [Symbol.hasInstance](obj) {
            return Number(obj) % 2 === 0;
        }
    }
    console.log(1 instanceof Even) // false
    console.log(2 instanceof Even) // true
    console.log(12345 instanceof Even) // false

}
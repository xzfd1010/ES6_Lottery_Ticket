// import { map, takeWhile, forEach } from "iterlib";
{
    // 默认值后面不能再有没有默认值的变量
    // 比如y后面不能有无默认值的c
    function test(x, y = 'world') {
        console.log('默认值', x, y)
    }

    test('hello');
    test('hello', 'kill');

}
{
    let x = 'test';

    function test2(x, y = x) {
        console.log('作用域', x, y);
    }

    test2('kill');//'kill'对应x，y=x现在自己的作用域中找x的值，再向上一级作用域查找
}

{
    //rest参数， args后面不可以再有其他参数
    function test3(...args) {
        for (let v of args) {
            console.log('rest', v);
        }
    }

    test3(1, 2, 3, 4);
}

{
    // 扩展运算符
    console.log(...[1, 2, 3]);
    console.log('a', ...[1, 2, 3]);
}

{
    // 箭头函数，函数名，函数参数，函数返回值
    let arrow = v => v * 2;
    console.log('arrow', arrow(2));

    let arrow2 = () => 5;
    console.log(arrow2());

    // 箭头函数的使用根据业务场景使用
}

{
    // 尾调用，函数式编程，函数的最后一句话是不是一句函数？
    function tail(x) {
        console.log('tail', x);
    }

    function fx(x) {
        return tail(x);
    }

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

    const pipeline = (...funcs) =>
        val => funcs.reduce((a, b) => b(a), val);

    const pipeline2 = function (...funcs) {
        return function (val) {
            return funcs.reduce(function (a, b) {
                return b(a);
            }, val);
        }
    };

    const plus1 = a => a + 1;
    const mult2 = a => a * 2;
    const addThenMult = pipeline2(plus1, mult2);

    console.log(addThenMult(5))

}

{


}
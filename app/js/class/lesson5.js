{
    // 2进制表示方法，以0b开头，b小写、大写都可以
    console.log(0b111110111);// 503
    console.log(0B111110111);// 503
    // 8进制 0o开头
    console.log(0o767);
}

{
    // Number.isFinite() 判断值是否为无限
    console.log('15', Number.isFinite(15)); // true
    console.log('NaN', Number.isFinite(NaN)); // false
    console.log('1/0', Number.isFinite('true' / 0));

    // Number.isNaN 判断值是不是NaN
    console.log('NaN', Number.isNaN(NaN));
    console.log('1/0', Number.isNaN(1/0));
}

{
    // 判断是否是整数 NaN.isInteger 判断是否是整数，参数必须是Number
    console.log('25', Number.isInteger(25)); // true
    console.log('25.0', Number.isInteger(25.0)); // true
    console.log('25.1', Number.isInteger(25.1)); // false
    console.log('25', Number.isInteger('25')); // false
}
{
    // Number的上下极限：-2^53,2^53
    console.log(Number.MAX_SAFE_INTEGER);// 上线
    console.log(Number.MIN_SAFE_INTEGER);

    // 判断数是否在有效区间之内：参数是数
    console.log('10', Number.isSafeInteger(10));
    console.log('10', Number.isSafeInteger(Math.pow(2,53)));
    console.log('a', Number.isSafeInteger('a'));
}

{
    // 获取小数的整数部分
    // ES5中可以向上、向下取整
    console.log(4.1, Math.trunc(4.1)); // 4
    console.log(-4.1, Math.trunc(-4.1)); // -4
    console.log(-4.1, Math.floor(-4.1));// -5，不准确
    console.log(4.9, Math.trunc(4.9)); // 4
}

{
    // 判断数值是 正数、负数还是0，字符串会被转换
    console.log(-5,Math.sign(-5)); // -1
    console.log(0,Math.sign(0)); // 0
    console.log(5,Math.sign(5)); // 1
    console.log(5,Math.sign('5')); // 1
    console.log('foo',Math.sign('foo')); // NaN
}

{
    // 获取立方根
    console.log('-1',Math.cbrt(-1));
    console.log('-8',Math.cbrt(-8));
}

{
    // 指数运算符
    console.log(2 ** 3)
}

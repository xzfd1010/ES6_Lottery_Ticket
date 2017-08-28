{
    // 扩展运算符
    console.log(...[1, 2, 3]);// 1 2 3
    console.log(1, ...[2, 3, 4], 5);// 1 2 3 4 5

    // 应用
    // ES5 的写法
    console.log(Math.max.apply(null, [14, 3, 77]));

    // ES6 的写法
    console.log(Math.max(...[14, 3, 77]))

    // 等同于
    Math.max(14, 3, 77);
}
{
    //Array.of，把一组数据变量转换成数组
    let arr = Array.of(4, 3, 7, 9, 11);
    console.log('arr=', arr);

    let empty = Array.of(); // 空数组
    console.log('empty', empty);
}

{
    //Array.from，把伪数组转换成数组
    let ps = document.querySelectorAll('p');
    let pArr = Array.from(ps);
    pArr.forEach(function (item) {
        console.log(item.textContent);
    });

    //
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };
    console.log(Array.from(arrayLike));


// 另一个作用，相当于map
    console.log(Array.from([1, 3, 5], function (item) {
        return item * 2;
    }))
}

{
    // 填充数组的功能，把数组中的换成某个值
    console.log('fill-7', [1, 'a', undefined].fill(7));
    // 从第1个开始换，到第3个，起始位置1，到结束位置3
    console.log('fill,pos', ['a', 'b', 'c', 'd', 'e'].fill(7, 1, 3));
}

{
    // keys,values,entries
    for (let index of [1, 'c', 'ks'].keys()) {
        console.log('keys', index);
    }

    // 在chrome上有兼容问题
    for (let value of [1, 'c', 'ks'].values()) {
        console.log('values', value);
    }

    for (let entry of [1, 'c', 'ks'].entries()) {
        console.log('entries', entry);
    }

    for (let [index, value] of [1, 'c', 'ks'].entries()) {
        console.log('entries', index, value);
    }
}

{
    //0 代表位置
    //3 是截止位置，用第3个位置代替第0个位置
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
}

{
    // 查找
    // find只找到第一个符合的成员
    console.log([1, 2, 3, 4, 5, 6].find(function (item) {
        return item > 3;
    }));
    // findIndex找到对应下标
    console.log([1, 2, 3, 4, 5, 6].findIndex(function (item) {
        return item > 3;
    }));
}

{
    // 能够处理NaN
    console.log('number', [1, 2, NaN].includes(1));
    console.log('number', [1, 2, NaN].includes(NaN));
}
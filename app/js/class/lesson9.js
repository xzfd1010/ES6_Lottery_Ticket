{
    // 声明,a1和a2不可能相等
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2);

    // a3是key值，查看此key是否在全局注册过，如果注册过就返回这个值，如果没有，就生成
    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(a3 === a4);
}

{
    // 使用场景
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]:'123',
        'abc':345,
        'c':456
    };
    console.log('obj', obj);

    // 如果有symbol做key值，通过for in 和let of都拿不到其属性
    for(let [key,value] of Object.entries(obj)){
        console.log('let of', key, value);
    }

    // 解决办法，获取用symbol作为key值的属性的对象
    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);
    });

    // Reflect ownkeys，取到所有的key value值
    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownkeys', item, obj[item]);
    });

}
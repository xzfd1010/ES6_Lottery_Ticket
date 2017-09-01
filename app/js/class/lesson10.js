{
    let list = new Set();
    list.add(5);// list中添加元素
    list.add(7);

    console.log('size', list.size);//list.size属性代表长度
}

{
    // 数组转为set
    let arr = [1, 2, 3, 4, 5];
    let list = new Set(arr);
    console.log('size', list.size);
    console.log(list);
}

{
    // set中的变量是唯一的，此特性可用于去重
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);// 没有成功添加

    console.log('list', list);

    let arr = [1, 2, 3, 1, 2];
    let list2 = new Set(arr);

    console.log('unique', list2);
    // 转换元素时不会进行类型转化，比如'2'和2是不同的
}

{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    console.log('has', list.has('add'));
    console.log('delete', list.delete('add'), list);
    list.clear();
    console.log(list);
}

{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    // key和value是相同的
    for (let key of list.keys()) {
        console.log('key', key);
    }
    for (let value of list.values()) {
        console.log('value', value);
    }
    for (let [key, value] of list.entries()) {
        console.log('entry', key, value);
    }

    list.forEach(function (item) {
        console.log(item);
    })
}

{
    // weakSet
    /** 与set的区别
     *  weakSet和set支持的元素不同，weakSet只支持对象；
     *  weakSet中的对象都是弱引用，不会检测是否被垃圾回收掉了
     *  没有size属性及clear方法，不能遍历
     */
    let weakList = new WeakSet();
    let arg = {};
    weakList.add(arg);
    // weakList.add(2); 报错

    console.log('weakList', weakList);
}

{
    // map定义方式1
    let map = new Map();
    let arr = ['123'];

    // set添加元素用add，map添加元素用set
    // 此处arr是key
    map.set(arr, 456);
    console.log('map', map, map.get(arr));
}

{
    // map定义方式2
    let map = new Map([['a', 123], ['b', 456]]);
    console.log('map args', map);
    console.log('map size', map.size);
    console.log('delete', map.delete('a'), map);
    console.log('clear', map.clear(), map);
}

{
    // weakMap
    /**
     * key值必须是对象
     * 没有set属性，不能使用clear
     * 不能遍历
     */
    let weakmap = new WeakMap();
    let o = {};
    weakmap.set(o, 123);
    console.log(weakmap.get(o));

}
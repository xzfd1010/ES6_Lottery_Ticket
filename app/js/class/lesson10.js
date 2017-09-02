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

{
    // map-array，数据结构横向对比，增删改查
    let map = new Map();
    let array = [];

    // 增
    map.set('t', 1);
    array.push({t: 1});

    console.info('map-array', map, array);

    // 查
    let map_exist = map.has('t');// map查询，存在返回true
    let array_exist = array.find(item => item.t);// 存在，返回值
    console.info('map-array', map_exist, array_exist);

    // 改
    map.set('t', 2);//修改比较简单，set(key,value)
    array.forEach(item => item.t ? item.t = 2 : '');// 遍历，修改值
    console.log('map-array-modify', map, array);

    // 删除
    map.delete('t');//map
    let index = array.findIndex(item => item.t);//找到值的索引
    array.splice(index, 1);//利用splice删除
    console.info('map-array', map, array);

}

{
    // set和array的对比
    let set = new Set();
    let array = [];

    // 增
    set.add({t: 1});
    array.push({t: 1});
    console.info('set-array', set, array);

    // 查
    let set_exist = set.has({t: 1});//也是has方法，此处是false，因为对象的引用不同，只有保存成变量才能查到
    let array_exist = array.find(item => item.t);
    console.info('set-array', set_exist, array_exist);

    // 改
    set.forEach(item => item.t ? item.t = 2 : '');//通过属性查找，存在则修改值
    array.forEach(item => item.t ? item.t = 2 : '');
    console.info('set-array-modify', set, array);

    // 删
    set.forEach(item => item.t ? set.delete(item) : '');// 需要找到值，才能删除
    let index = array.findIndex(item => item.t);//找到值的索引
    array.splice(index, 1);
    console.info('map-array', set, array);
}

{
    // map、set和obj的对比
    let item = {t: 1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    // 增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;
    console.info('map-set-obj', obj, map, set);

    // 查，map和set语义化更好
    console.info({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    });

    // 改
    map.set('t', 2);
    item.t = 2;// 有引用修改数据本身，否则forEach查找
    obj['t'] = 2;
    console.info('map-set-obj-modify', obj, map, set);

    // 删除
    map.delete('t');
    set.delete(item);// 无引用则需要forEach删除
    delete obj['t'];
    console.info('map-set-obj-empty', obj, map, set);

    // 能使用map，不使用数组
    // 优先使用map，如果要保证唯一性set，

}



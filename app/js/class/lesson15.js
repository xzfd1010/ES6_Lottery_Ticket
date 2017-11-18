// generator
// 基本用法
{
    // 函数定义 + *
    // 内部有yield
    let tell = function* () {
        yield 'a'; //
        yield 'b';
        return 'c';
    };

    let k = tell();

    // 输出结果就是Iterator
    console.log(k.next()); // 执行时会在yield时停止
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());

}
// generator和iterator的关系：使用generator作为遍历器
{
    let obj = {}; //原生obj没有for...of
    // 通过generator部署iterator
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };

    for (let value of obj) {
        console.log('value', value)
    }
}

// 状态机
// {
//     //a->b->c->a，3种状态
//     let state = function* () {
//         while (1) { // 无限循环
//             yield 'A';
//             yield 'B';
//             yield 'C';
//
//         }
//     };
//     // 获取状态
//     let status = state();
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//
// }
// async
{
    // let state = async function() {
    //     while (1) { // 无限循环
    //         await 'A';
    //         await 'B';
    //         await 'C';
    //     }
    // };
    // // 获取状态
    // let status = state();
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
}

// 实例：抽奖
// 逻辑：限制抽奖次数
{
    // 隔离出的纯粹的抽奖逻辑
    // let draw = function (count) {
    //     // 具体抽奖逻辑忽略
    //     // 输出剩余次数
    //     console.log(`剩余${count}次`)
    // };
    //
    // // 如何计算当前剩余次数？全局变量，无法修改；尽量少把数据存在全局对象上
    //
    // let residue = function* (count) {
    //     while (count > 0) { // 限制次数
    //         count--;
    //         //可抽奖，抽奖具体逻辑
    //         yield draw(count)
    //     }
    // };
    //
    // let star = residue(5); // generator实例化
    //
    // let btn = document.createElement('button');
    // btn.id = 'start';
    // btn.textContent = '抽奖';
    // document.body.appendChild(btn);
    // document.getElementById("start").addEventListener("click", function () {
    //     star.next() // 抽奖
    // }, false);

}

// 长轮询
// 实时取得服务器的某个状态
// 之前的做法：通过setTimeout
// 可以定义多种操作是它的优势么？
// {
//     let ajax = function* () {
//         yield new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 resolve({code: 1});
//             }, 200) // 200ms通信一次
//         })
//     };
//
//     let pull = function () {
//         let generator = ajax();
//         let step = generator.next(); // 运行第一次
//         // step的value获得promise
//         // promise200ms后转为resolve状态，开始执行then中的resovle方法
//         // generator的应用时机是每隔1s就获取一个promise再次请求
//         step.value.then(function (d) {
//             // 如果状态没有发生改变，继续请求服务器
//             if (d.code !== 0) {
//                  setTimeout(function () {
//                     console.info("wait");
//                     pull()
//                 }, 1000)
//             } else {
//             // 如果改变，执行对应操作
//                 console.log(d);
//             }
//
//         })
//     };
//
//     pull();
// }

// 如果不用generator怎么写，和普通的promise调用有什么区别么？暂时没理解
// {
//     let ajax = function() {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 resolve({code: 0});
//             }, 200) // 200ms通信一次
//         })
//     };
//
//     let pull = function () {
//         let promise = ajax(); // 获取promise
//         // step的value获得promise
//         // promise200ms后转为resolve状态，开始执行then中的resovle方法
//         // generator的应用时机是每隔1s就获取一个promise再次请求
//         promise.then(function (d) {
//             // 如果状态没有发生改变，继续请求服务器
//             if (d.code !== 0) {
//                 setTimeout(function () {
//                     console.info("wait");
//                     pull()
//                 }, 1000)
//             } else {
//                 // 如果改变，执行对应操作
//                 console.log(d);
//             }
//
//         })
//     };
//     pull()
// }

// 斐波那契数列
{
    function* fibonacci() {
        let [prev, curr] = [0, 1];
        for (; ;) {
            [prev, curr] = [curr, prev + curr];
            yield curr; // 返回数列中的数值
        }
    }

    for (let n of fibonacci()) {
        if (n > 1000) break;
        console.log(n);
    }

}

// generator的throw方法
{
    var g = function* () {
        try {
            yield;
        } catch (e) {
            console.log('内部捕获', e);
        }
    };
    var i = g();
    i.next();
    try {
        i.throw('a');// 内部捕获
        i.throw('b');// 外部捕获
    } catch (e) {
        console.log('外部捕获', e);
    }

}

// generator的return 方法

{
    function* gen() {
        yield 1;
        yield 2;
        yield 3;
    }

    var g = gen();
    console.log(g.next())        // { value: 1, done: false }
    console.log(g.return('foo')) // { value: "foo", done: true }
    console.log(g.next())        // { value: undefined, done: true }

}

// 模块化
/**
 * 功能：
 *    提供变量/类/方法
 */
// 不建议这样写
// export let A = 123;
// export function test(){
//     console.log("test");
// }
//
// export class Hello{
//     test(){
//         console.log("class");
//     }
// }

// 其他写法
let A = 123;
let test = function () {
    console.log("test")
};

class Hello {
    test() {
        console.log("class")
    }
}
// export对应的变量；
// 第三方引用的时候不需要看名称
export default {
    A,
    test,
    Hello
}
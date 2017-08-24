{
    /**
     * 构造函数
     * flags、sticky
     * y修饰符、g修饰符的特点
     * u修饰符的使用
     * s修饰符的作用
     */
}
{
    // 构造函数
    // ES5中的写法
    let regex = new RegExp('xyz', 'i');// 字符串，修饰符
    let regex2 = new RegExp(/xyz/i);// 直接正则

    console.log(regex.test('xyz123'), regex2.test('xyz123'));

    // ES6中构造函数
    let regex3 = new RegExp(/xyz/ig, 'i');// 可以是两个参数，es6中的第二个参数可以覆盖前面的正则表达式的修饰符
    console.log(regex3.flags);// regex.flags可以获取修饰符
}

{
    // 都是全局匹配
    // g修饰符从上一次匹配的位置开始寻找，进行匹配
    // y修饰符必须从上一次匹配的第一个字符开始匹配
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;

    console.log('one', a1.exec(s), a2.exec(s));
    console.log('two', a1.exec(s), a2.exec(s));

    // sticky查看是否开启了y匹配的方式
    console.log(a1.sticky, a2.sticky);
}

{
    // u修饰符 Unicode缩写，在正则处理Unicode字符时的特征值
    console.log('u-1', /^\uD83D/.test('\uD83D\uDc2A')); // 没加的话，会把当成2个字符
    console.log('u-2', /^\uD83D/u.test('\uD83D\uDc2A'));// 加了，当成一个字符

    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));// 如果中间是一个Unicode编码，需要添加u修饰符，进行转码

    // .字符只能识别 <0xffff  如果编码超过2个字节，无法识别

    console.log(`\u{20BB7}`);

    let char = '𠮷';

    console.log('u-1', /^.$/.test(char));
    console.log('u-2', /^.$/u.test(char));

    console.log('test-1', /𠮷{2}/.test('𠮷𠮷'));
    console.log('test-2', /𠮷{2}/u.test('𠮷𠮷'));
}

{
    //s修饰符

    // .不能处理 换行符 回车符 行分隔符 段分隔符

    // 提案
}


import {deprecate} from 'core-decorators';

// Decorators
// 函数，用来修改类的行为
// 修改类的方法
{
    /**
     *
     * @param target 目标对象
     * @param name 属性名称
     * @param descriptor 修饰符
     */
    let readonly = function (target, name, descriptor) {
        descriptor.writable = false;
        return descriptor;
    }

    class Test {
        @readonly
        time() {
            return "2017-11-25"
        }
    }

    let test = new Test();

    // 修改time属性
    // test.time = function(){
    //     console.log('reset time');
    // };  // Cannot assign to read only property 'time' of object '#<Test>' 报错
    console.log(test.time())
}

// 多个decorator
{
    function dec(id) {
        console.log('evaluated', id);
        return (target, property, descriptor) => console.log('executed', id);
    }

    class Example {
        @dec(1)
        @dec(2)
        method() {
        }
    }

    var ex = new Example();
    ex.method();

}


// 修饰类
{
    let typename = function (target, name, descriptor) {
        target.myname = "hello"
    };

    // 在类的外面
    @typename
    class Test {

    }

    console.log("类修饰符", Test.myname) // 添加的是静态属性
}

// 常用的第三方修饰器js库：core-decorators; npm install xxx

// 现实中的案例：日志系统  为了记录广告的行为，之前的写法是在显示/点击的时候执行对应的函数
// 修饰器的写法
{
    // 修饰器的方法
    /**
     * @param type click/show之类的行为
     * @returns {Function}
     */
    let log = (type) => {
        return function (target, name, descriptor) {
            let src_method = descriptor.value; // 原始的函数体
            descriptor.value = (...args) => { // 方法重新赋值，rest参数
                src_method.apply(target, args);
                console.info(`log ${type}`); // 模拟埋点，真实的环境中需要替换
            }
        }
    };


    // 广告的类
    class AD {
        @log('show')
        show() {
            console.info("ad is show");
        }

        @log('click')
        click() {
            console.info("ad is click");
        }
    }

    let ad = new AD();
    ad.show();
    ad.click();

    /**
     * 好处：
     *   1. 埋点系统抽离出来
     *   2. 业务代码的简洁度和可修饰性更强
     */
}

// deprecated用法
{
    class Person {
        @deprecate
        facepalm() {
        }

        @deprecate('We stopped facepalming')
        facepalmHard() {
        }

        @deprecate('We stopped facepalming', {
            url: 'http://knowyourmeme.com/memes/facepalm'
        })
        facepalmHarder() {
        }
    }

    let person = new Person();
    person.facepalm();
    // DEPRECATION Person#facepalm: This function will be removed in future versions.
    person.facepalmHard();
    // DEPRECATION Person#facepalmHard: We stopped facepalming
    person.facepalmHarder();
    // DEPRECATION Person#facepalmHarder: We stopped facepalming

}
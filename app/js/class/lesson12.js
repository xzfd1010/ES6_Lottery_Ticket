{
    // 基本定义和生成实例
    class Parent {
        // 构造函数
        constructor(name = 'parent') {
            this.name = name;
        }
    }

    let v_parent = new Parent('v');
    console.log('构造函数和实例', v_parent);
}

// this的指向
{
    class Logger {
        constructor() {
            this.printName = (name = 'there') => {
                this.print(`Hello ${name}`);
            };
        }

        // constructor() {
        //     this.printName = this.printName.bind(this);
        // }


        print(text) {
            console.log(text);
        }
    }

    const logger = new Logger();
    const {printName} = logger;
    // console.log(printName)
    printName(); // TypeError: Cannot read property 'print' of undefined
}
// class的generator方法，polyfill能运行
{
    class Foo {
        constructor(...args) {
            this.args = args;
        }

        * [Symbol.iterator]() {
            for (let arg of this.args) {
                yield arg;
            }
        }
    }

    for (let x of new Foo('hello', 'world')) {
        console.log(x);
    }
}
{
    // 继承
    class Parent {
        constructor(name = 'parent') {
            this.name = name;
        }
    }

    class Child extends Parent {

    }

    console.log('继承', new Child());

}

{
    // 继承传递参数
    class Parent {
        constructor(name = 'parent') {
            this.name = name;
        }
    }

    class Child extends Parent {
        constructor(name = 'child') {
            super(name);// 子类向父类传参，super必须放在第一行
            this.type = 'child'; // 定义自己的属性，一定要放在super之后
        }
    }

    console.log('继承', new Child('hello'));
}

// super作为对象调用
{
    class A {
        p() {
            return 2;
        }
    }

    class B extends A {
        constructor() {
            super();
            console.log("super指向父类原型：", super.p()); // 2  此时指向父类的原型对象
        }
    }

    let b = new B();

}

// super在静态方法中使用
{
    class Parent {
        static myMethod(msg) {
            console.log('static', msg);
        }
        myMethod(msg) {
            console.log('instance', msg);
        }
    }
    class Child extends Parent {
        static myMethod(msg) { // 子类的静态方法
            super.myMethod(msg); // 调用父类的静态
        }
        myMethod(msg) { // 子类覆盖父类的方法
            super.myMethod(msg); // super指向父类的原型对象
        }
    }
    Child.myMethod(1); // static 1
    var child = new Child();
    child.myMethod(2); // instance 2
}

// extends继承原生构造函数
{
    class MyArray extends Array {
        constructor(...args) {
            super(...args);
        }
    }
    var arr = new MyArray();
    arr[0] = 12;
    console.log(arr.length); // 1
    arr.length = 0;
    console.log(arr[0]) // undefined

}

{
    // getter setter
    class Parent {
        constructor(name = 'parent') {
            this.name = name;
        }

        // 是属性而非方法
        get longName() {
            return 'name:' + this.name;
        }

        set longName(value) {
            this.name = value;
        }
    }

    // 使用
    let v = new Parent();
    console.log('getter', v.longName);
    v.longName = 'hello';// 赋值就是set操作
    console.log('setter', v.longName);
}

{
    // 静态方法
    class Parent {
        constructor(name = 'parent') {
            this.name = name;
        }

        static tell() {
            console.log('tell');
        }
    }

    // 通过类调用
    Parent.tell();
}

{
    // 静态属性
    class Parent {
        constructor(name = 'parent') {
            this.name = name;
        }

        static tell() {
            console.log('tell');
        }

        //static test = '123';错误
    }

    Parent.type = 'test'; // 直接在类上定义

    console.log('静态属性', Parent.type);

}
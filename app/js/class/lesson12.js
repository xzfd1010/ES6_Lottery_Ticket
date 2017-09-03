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
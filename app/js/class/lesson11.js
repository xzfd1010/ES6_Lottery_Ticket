{
    // 原始对象存储数据
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };

    // 代理商：通过代理限制用户对于原始对象的修改
    // 参数（原始对象，操作）
    // 常用方法：get/set/has/deleteProperty/ownKeys
    let monitor = new Proxy(obj, {
        // 拦截对象属性的读取
        get(target, key) {
            return target[key].replace('2017', '2018');// 将所有的2017替换为2018
        },
        // 拦截对象设置属性
        set(target, key, value) {
            // 此时只允许修改name
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },
        // 拦截key in object操作
        has(target, key) {
            // 只暴露name属性
            if (key === 'name') {
                return target[key];
            } else {
                return false;
            }
        },
        // 拦截delete
        deleteProperty(target, key) {
            // 以下划线开头的允许删除
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },
        // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target) {
            return Object.keys(target).filter(item => item !== 'time');
        }
    });

    // 用户访问monitor，不管用户通过读取还是设置monitor的属性，最后再通过proxy传递给obj
    console.log('get', monitor.time);

    monitor.time = '2018';
    monitor.name = 'nick';
    console.log('set', monitor.time, monitor);
    console.log('has', 'name' in monitor, 'time' in monitor);

    // delete monitor.time;
    // console.log('delete', monitor);
    //
    // delete monitor._r;
    // console.log('delete', monitor);

    console.log('ownKeys', Object.keys(monitor));
}

{
    // Reflect和Proxy的参数一致，使用方法一致
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };

    console.log('Reflect get', Reflect.get(obj, 'time'));
    Reflect.set(obj, 'name', 'reflect');
    console.log(obj);
    console.log('has', Reflect.has(obj, 'name'));
}

{
    // 适用场景：数据类型的校验，和业务解耦的校验模块
    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let va = this._validator[key];
                    if (!!va(value)) {
                        return Reflect.set(target, key, value, proxy);
                    } else {
                        throw Error(`不能设置${key}到${value}`);
                    }
                } else {
                    throw Error(`${key} 不存在`);
                }
            }
        })
    }

    const personValidators = {
        name(val) {
            return typeof val === 'string';
        },
        age(val) {
            return typeof val === 'number' && val > 18;
        },
        mobile(val){

        }
    };

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.mobile = '1111';
            return validator(this, personValidators);// 返回的是一个包含validator的proxy
        }
    }

    const person = new Person('nick', 25);

    console.info(person);

    person.name = 'arron';

    console.log(person);


}
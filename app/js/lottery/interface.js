// 接口功能
import $ from 'jquery';
// 模块的特色
// es5中使用回调，es6使用Promise + 对象方法引用
class Interface {
    /**
     * [getOmit 获取遗漏数据]
     * @param {string} issue [当前期号]
     */
    getOmit(issue) {
        let self = this; // 当前引用，箭头函数的this指向是在定义而非运行时的，内部引用self
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/omit',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function (res) {
                    // 把数据保存到当前对象上
                    self.setOmit(res.data); // setOmit是其他类的方法
                    resolve.call(self, res); // 成功的时候resolve，res传给then方法，then方法中是回调
                },
                error: function (err) {
                    reject.call(err);
                }
            })
        })
    }

    /**
     * [getOpenCode 获取开奖号码]
     * @param {string} issue [期号]
     */
    getOpenCode(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/opencode',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function (res) {
                    self.setOpenCode(res.data); // 保存，让其他模块可以使用
                    resolve.call(self, res);
                },
                error: function (err) {
                    reject.call(err);
                }
            })
        })
    }

    /**
     * [getState 获取当前状态]
     * @param {string} issue [期号]
     */
    // 彩票知识点：每10min一期，然后下一期，数据和期号密切相关
    getState(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/state',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function (res) {
                    // 涉及期号的保存，交给下一步处理
                    resolve.call(self, res);
                },
                error: function (err) {
                    reject.call(err);
                }
            })
        })
    }
}

export default Interface;


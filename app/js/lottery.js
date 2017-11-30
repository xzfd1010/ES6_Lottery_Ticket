// 由lottery继承所有的模块，进行实例化
// 需要服务端给时间戳，联调完成
import 'babel-polyfill';
import Base from './lottery/base.js';
import Timer from './lottery/timer.js';
import Calculate from './lottery/calculate.js';
import Interface from './lottery/interface.js';
import $ from 'jquery'

// 多重继承 + 深度拷贝
const copyProperties = function (target, source) {
    // 获取源对象的所有属性
    for (let key of Reflect.ownKeys(source)) {
        if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
            let desc = Object.getOwnPropertyDescriptor(source, key); // 获取属性
            Object.defineProperty(target, key, desc); // target拷贝对应属性
        }
    }
};

// mixin是代表多个类
const mix = function (...mixins) {
    class Mix {
    }

    // 循环mixin数组
    for (let mixin of mixins) {
        copyProperties(Mix, mixin); // 拷贝一个类
        copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型
    }
    return Mix
};

// 这里有点像接口
class Lottery extends mix(Base, Calculate, Interface, Timer) {
    constructor(name = 'syy', cname = '11选5', issue = '**', state = '**') {
        super();
        this.name = name; // 玩法
        this.cname = cname; // 玩法中文
        this.issue = issue; // 期号
        this.state = state;
        this.el = '';
        this.omit = new Map(); // 遗漏
        this.open_code = new Set(); // 开奖号码
        this.open_code_list = new Set(); // 开奖记录
        this.play_list = new Map(); // 玩法列表
        this.number = new Set(); // 选号
        this.issue_el = '#curr_issue'; // 当前期号选择器
        this.countdown_el = '#countdown'; // 倒计时选择器
        this.state_el = '.state-el'; // 状态选择器
        this.cart_el = '.codelist'; // 购物车选择器
        this.omit_el = ''; // 遗漏选择器
        this.cur_play = 'r5'; //默认玩法
        this.initPlayList(); // 初始化玩法列表
        this.initNumber(); // 初始化？？
        this.updateState(); // 更新状态
        this.initEvent(); // 事件初始化
    }

    /**
     * [updateState 状态更新]
     */

    updateState() {
        let self = this;
        this.getState().then(function (res) {
            self.issue = res.issue; // 当前期号
            self.end_time = res.end_time; // 截止时间
            self.state = res.state; // 当前状态
            $(self.issue_el).text(res.issue); // 更新当前期号
            self.countdown(res.end_time, function (time) {
                $(self.countdown_el).html(time);
            }, function () {
                // 结束的回调
                setTimeout(function () {
                    self.updateState();
                    self.getOmit(self.issue).then(function (res) {

                    });
                    self.getOpenCode(self.issue).then(function () {

                    })
                }, 500)
            });
        })
    }

    /**
     * [initEvent 初始化事件]
     */
    initEvent() {
        let self = this;
        $('#plays').on('click', 'li', self.changePlayNav.bind(self));
        $('.boll-list').on('click', '.btn-boll', self.toggleCodeActive.bind(self));
        $('#confirm_sel_code').on('click',self.addCode.bind(self));
        $('.dxjo').on('click', 'li', self.assignHandle.bind(self));
        $('.qkmethod').on('click', '.btn-middle', self.getRandomCode.bind(self));

    }
}

export default Lottery;



# 彩票项目（11选5）

![项目演示图片](http://oph264zoo.bkt.clouddn.com/17-7-3/87703335.jpg)

👉 GitHub: https://github.com/xzfd1010/ES6_Lottery_Ticket.git

👉 项目演示地址: http://es6lottery.t.imooc.io

## 项目简介

这一个彩票项目（11选5），大量使用 ES6 原生语法，主要是为了学习 ES6 而实战的项目，过程中没有太过注重业务和服务端的编写，主要是体会 ES6 的用法及便捷之处。

本项目主要功能模块：期号自动更新、倒计时、开售状态、玩法切换、自主选号、随机选号、金额计算、奖金预测等。

## 技术栈

- **ES6**: 主要用到了let、const、箭头函数、rest参数、class、Mixin模式、Set Map 数据结构、Promise 等新特性
- **Gulp**: 编写 gulp 脚本完成ES6的自动编译、打包、文件监听、浏览器热更新等
- **Babel**: 实现了 ES6 转 ES5，babel-polifill用于新的数据类型等转译。
- **Webpack**: 自动编译
- **Express.js**: 搭建服务器
- **mockjs**: 模拟后端数据，与前端实现数据对接

## 收获

1. 熟悉了 ES6 的语法
2. 了解了模块化编程的好处，其中利用不同的class实现各自功能，利用Mixin模式实现继承印象深刻。
3. 加深对 gulp、webpack 等自动化工具的认识

## Build Setup

```
# clone the repo into your disk.
$ git clone https://github.com/xzfd1010/ES6_Lottery_Ticket.git

# 安装express依赖
$ cd server
$ npm install
$ cd..
# 安装项目依赖
$ npm install
# run gulp
$ gulp --watch

# visit
$ http://localhost:3000/
```
    
    
   
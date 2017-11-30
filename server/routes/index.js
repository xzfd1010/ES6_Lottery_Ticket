var express = require('express');
var mockjs = require('mockjs'); // 模拟服务端
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


var makeIssue = function () {
    var date = new Date();
    var first_issue_date = new Date(); // 第一期的时间，当天9点10分开始销售
    first_issue_date.setHours(9);
    first_issue_date.setMinutes(10);
    first_issue_date.setSeconds(0);
    var end_issue_date = new Date(first_issue_date.getTime() + 77 * 10 * 60 * 1000); // 截止时间，每10min一期，每天卖77期，也就是晚上10点停止

    var cur_issue, end_time, state;
    // 当前时间在销售时间范围内
    if (date.getTime() - first_issue_date.getTime() > 0 && date.getTime() - end_issue_date.getTime() < 0) {
        // 正常销售状态
        var cur_issue_date = new Date();
        cur_issue_date.setHours(9);
        cur_issue_date.setMinutes(0);
        cur_issue_date.setSeconds(0);
        var minus_time = date.getTime() - cur_issue_date.getTime(); // 当前时间距离上午9点的ms数
        var h = Math.ceil(minus_time / 1000 / 60 / 10); // 距离9点的 10min 的个数，通过这个可以计算当天已经销售了多少期以及当前正在销售的期数
        var end_date = new Date(cur_issue_date.getTime() + 1000 * 60 * 10 * h); //当前期数的截止时间

        end_time = end_date.getTime();
        // 当前期数
        cur_issue = [end_date.getFullYear(), ('0' + (end_date.getMonth() + 1)).slice(-2), ('0' + end_date.getDate()).slice(-2), ('0' + h).slice(-2)].join('');
    } else {
        // 销售已截止
        // if (date.getDate() !== end_issue_date.getDate()) {
        //     first_issue_date.setDate(first_issue_date.getDate() + 1);
        // }

        end_time = first_issue_date.getTime();
        cur_issue = [first_issue_date.getFullYear(), ('0' + (first_issue_date.getMonth() + 1)).slice(-2), ('0' + first_issue_date.getDate()).slice(-2), '01'].join('');
    }

    // 判断状态，前8分钟销售，后2分钟开奖中
    var cur_date = new Date();
    if (end_time - cur_date.getTime() > 1000 * 60 * 2) {
        state = '正在销售';
    } else {
        state = '开奖中';
    }
    return {
        issue: cur_issue,
        state: state,
        end_time: end_time
    };
};

router.get('/get/omit', function (req, res, next) {
    res.json(mockjs.mock({
        'data|11': [/[1-9]{1,3}|0/],
        'issue': /[1-9]{8}/  // 假期号
    }))
});

router.get('/get/opencode', function (req, res, next) {
    var issue = makeIssue().issue;
    var data = mockjs.mock({
        'data': [/[1-3]/, /[4-5]/, /[6-7]/, /[8-9]/, /1[0-1]/]
    }).data;
    res.json({
        issue: issue,
        data: data
    });
});

router.get('/get/state', function (req, res, next) {
    var state = makeIssue();
    res.json(state);
});


module.exports = router;

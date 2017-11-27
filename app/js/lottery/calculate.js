class Calculate {
    /**
     * [computeCount 计算注数]
     * @param {number} active    [当前选中的号码]
     * @param {string} play_name [当前的玩法标识]  比如 任三、任四 对应 r3、r4等
     * @return {number}          [注数]
     */
    computeCount(active, play_name) {
        let count = 0; // 当前注数
        const exist = this.play_list.has(play_name); // play_list是Map类型  判断是否有对应玩法
        // arr是用来保存所选号码的数组
        const arr = new Array(active).fill('0'); // active是数组长度，fill()填充数组
        if (exist && play_name.at(0) === 'r') {
            // combine是静态方法，目的是随机填充数组中的某几项
            // arr是选中的数组，第二个的参数指的是随机的数字的个数
            count = Calculate.combine(arr, play_name.split('')[1]);
        }
        return count;
    }

    /**
     * [computeBonus 奖金范围预测]
     * @param {number} active    [当前选中号码]
     * @param {string} play_name [当前的玩法标识]
     * @return {Array}           [奖金范围]
     */
    computeBonus(active, play_name) {
        const play = play_name.split(''); // 当前玩法的基数
        const self = this; // 当前对象指向
        let arr = new Array(play[1] * 1).fill(0);
        let min, max; // 最大小值
        if (play[0] === 'r') {
            let min_active = 5 - (11 - active); // 最小命中数
            if (min_active > 0) {
                if (min_active - play[1] >= 0) {
                    arr = new Array(min_active).fill(0);
                    min = Calculate.combine(arr, play[1]);
                } else {
                    if (play[1] - 5 > 0 && active - play[1] >= 0) {
                        arr = new Array(active - 5).fill(0);
                        min = Calculate.combine(arr, play[1] - 5).length;
                    } else {
                        min = active - play[1] > -1 ? 1 : 0;
                    }
                }
            } else {
                min = active - play[1] > -1 ? 1 : 0;
            }

            let max_active = Math.min(active, 5);
            if (play[1] - 5 > 0) {
                if (active - play[1] >= 0) {
                    arr = new Array(active - 5).fill(0);
                    max = Calculate.combine(arr, play[1] - 5).length;
                } else {
                    max = 0;
                }
            } else if (play[1] - 5 < 0) {
                arr = new Array(Math.min(active, 5)).fill(0);
                max = Calculate.combine(arr, play[1]).length;
            } else {
                max = 1;
            }
        }
        return [min, max].map(item => item * self.play_list.get(play_name).bonus);
    }

    /**
     * [combine 组合运算]
     * @param {Array}  arr  [参与组合运算的数组]
     * @param {number} size [组合运算的基数]
     * @return {Array}     [计算注数]
     */
    // 实现逻辑：递归
    static combine(arr, size) {
        let allResult = [];
        (function f(arr, size, result) {
            let arrLen = arr.length;
            // size>arrLen，无须填充；
            if (size > arrLen) {
                return;
            }
            // size === arrLen，表示填充完毕
            if (size === arrLen) {
                allResult.push([].concat(result, arr));
            } else {
                for (let i = 0; i < arrLen; i++) {
                    let newResult = [].concat(result);// 生成新的数组
                    newResult.push(arr[i]);
                    if (size === 1) {
                        allResult.push(newResult)
                    } else {
                        let newArr = [].concat(arr);
                        newArr.splice(0, i + 1);
                        f(newArr, size - 1, newResult); // ES6中的递归写法不能用arguments.callee
                    }
                }
            }
        })(arr, size, []);
        return allResult;
    }

}

export default Calculate;
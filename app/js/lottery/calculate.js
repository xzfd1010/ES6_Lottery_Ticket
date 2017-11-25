class Calculate{
    /**
     * [computeCount 计算注数]
     * @param {number} active    [当前选中的号码]
     * @param {string} play_name [当前的玩法标识]  比如 任三、任四 对应 r3、r4等
     * @return {number}          [注数]
     */
    computeCount(active,play_name){
        let count = 0; // 当前注数
        const exist = this.play_list.has(play_name); // play_list是Map类型
        // 生成数组
        const arr = new Array(active).fill('0'); // active是数组长度，fill()填充数组
        if(exist && play_name.at(0) === 'r'){
            count = Calulate.combine(arr, play_name.split('')[1]); // combine是静态方法
        }
        return count;
    }

    /**
     * [combine 组合运算]
     * @param {array}  arr  [参与组合运算的数组]
     * @param {number} size [组合运算的参数]
     * @return {number}     [计算注数]
     */
    static combine(arr,size){
        let allResult = [];

        return 10;
    }

}
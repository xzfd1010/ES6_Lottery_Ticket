class Timer {
    /**
     * @param end 截止时间
     * @param update 时间更新的回调
     * @param handle 结束倒计时的回调
     */
    countdown(end, update, handle) {
        const now = new Date().getTime(); // 当前时间
        const self = this; //当前对象指针
        if (now - end > 0) {
            handle.call(self); // 倒计时结束的回调
        } else {
            let last_time = end - now; // 剩余时间
            const px_d = 1000 * 60 * 60 * 24; //一天的ms数
            const px_h = 1000 * 60 * 60; // 一小时的ms数
            const px_m = 1000 * 60;     // 一分钟的ms数
            const px_s = 1000;
            let d = Math.floor(last_time / px_d); // 剩余天数
            let h = Math.floor((last_time - d * px_d) / px_h);
            let m = Math.floor((last_time - d * px_d - h * px_h) / px_m);
            let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s);
            let r = [];// 保存时间的数组
            if (d > 0) {
                r.push(`<em>${d}</em>天`);
            }
            if (r.length || (h > 0)) {
                r.push(`<em>${h}</em>时`)
            }
            if (r.length || m > 0) {
                r.push(`<em>${m}</em>分`)
            }
            if(r.length||s>0){
                r.push(`<em>${s}</em>秒`)
            }
            self.last_time = r.join('');
            update.call(self, r.join(''));
            setTimeout(function(){
                self.countdown(end, update, handle);//重新调用
            },1000)
        }
    }
}

export default Timer;
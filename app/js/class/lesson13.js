// 单步操作
{
    let ajax = function (callback) {
        console.log("执行1")
        setTimeout(function () {
            callback && callback.call() // 经典写法
        }, 1000)
    }

    ajax(function () {
        console.log("timeout1")
    })
}

{
    let ajax = function () {
        console.log("执行2")
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 1000)
        })
    }

    ajax().then(function () {
        console.log("promise", "timeout2")
    })
}

// 多步操作
{
    let ajax = function () {
        console.log("执行3")
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 1000)
        })
    }

    ajax().then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 2000)
        })
    }).then(function () {
        console.log("timeout3")
    })
}

// 捕获错误catch
{
    let ajax = function (num) {
        console.log("执行4")
        return new Promise(function (resolve, reject) {
            if (num < 5) {
                resolve()
            } else {
                throw new Error("出错了")
            }
        })
    }

    ajax(6).then(function () {
        console.log("log", 6)
    }).catch(function (err) {
        console.log("catch", err)
    })
}

// all方法，3张图都加在完毕后再添加到页面中
{
    // 加载图片的函数
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement("img")
            img.src = src
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(err)
            }
        })
    }

    function showImgs(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img)
        })
    }

    // Promise.all([
    //     loadImg("http://i4.buimg.com/567571/df1ef0720bea6832.png"),
    //     loadImg("http://i4.buimg.com/567571/2b07ee25b08930ba.png"),
    //     loadImg("http://i4.buimg.com/567771/5eb8190d6b2a1c9c.png")
    // ]).then(showImgs)
}

// race方法，3个任意完成就添加到页面中
{
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement("img")
            img.src = src
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(err)
            }
        })
    }

    function showImgs(img) {
        let p = document.createElement("p")
        p.appendChild(img)
        document.body.appendChild(p)
        // imgs.forEach(function (img) {
        //     document.body.appendChild(img)
        // })
    }

    // 其他两个即便加载完毕也不会触发
    Promise.race([
        loadImg("http://i4.buimg.com/567571/df1ef0720bea6832.png"),
        loadImg("http://i4.buimg.com/567571/2b07ee25b08930ba.png"),
        loadImg("http://i4.buimg.com/567771/5eb8190d6b2a1c9c.png")
    ]).then(showImgs)
}
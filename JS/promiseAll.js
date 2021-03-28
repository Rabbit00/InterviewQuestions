Promise.all = arr => {
    let resList = [] // 记录执行结果
    return new Promise((resolve, reject) => {
        console.log('heih')
        let i = 0
        next() // 递归
        function next () {
            arr[i].then(function (res) {
                resList.push(res)
                i++
                if (i === arr.length) { // 所有任务执行完成，改变promise状态
                    return resolve(resList)
                } else {
                    next()
                }
            })
        }
        
    })
}

// 测试数据
var p1 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 1000, 'one'); 
}); 
var p2 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 2000, 'two'); 
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three');
});

Promise.all([p1, p2, p3]).then(values => { 
    console.log(values);
}, reason => {
    console.log(reason)
});
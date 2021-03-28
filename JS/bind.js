/**
 * 
 * 手写bind函数
 */
Function.prototype.myBind = function() {
    console.log('arguments', arguments)
    var self = this, // 保存原函数
        context = [].shift.call(arguments), // 保存需要绑定的this上下文
        args = [].slice.call(arguments) // 剩余的参数转为数组
    console.log('context', context)
    console.log('args', args)
    return function () {
        self.apply(context, [].concat.call(args, [].slice.call(arguments)))
    }
 }

function print (a, b, c) {
    console.log(a + ':' + b + ':' + c)
}

var func = print.myBind(null, 'hh')

func(1, 2, 3)
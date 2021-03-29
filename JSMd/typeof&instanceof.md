# typeof操作符 实现原理

typeof 返回一个字符串，表示未经计算的操作符类型

js在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息
- 000 对象
- 010 浮点数
- 100 字符串
- 110 布尔
- 1   整数
特别的
- null 机器码均为0
- undefined 用-2^30整数来表示
```
    typeof NaN // 'number'
    typeof String(1) // 'string'
    typeof !1 // 'boolean'
    typeof undefined // 'undefined'
    typeof Symbol() // 'symbol'
    typeof undefined // 'undefined'

    typeof {a: 1} // 'object'
    typeof [1, 2, 4] // 'object'
    typeof new Date() // 'object'
    typeof null // 'object'

    typeof class C {} // 'function'
```


# instanceof操作符 object instanceof constructor
定义：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上
Javascript实例对象上均有一个隐式的proto对象
函数function都有一个prototype，显式原型（属性）
## 实现代码
```
    function newInstanceof (leftValue, rightValue) {
        let rightProto = rightValue.prototype // 右表达式prototype
            leftValue = leftValue.__proto__ // 左表达式__proto__
        while (true) {
            // console.log(leftValue, rightProto)
            if (leftValue === null) return false
            if (leftValue === rightProto) return true
            leftValue = leftValue.__proto__
        }   
    }
```

```
    Function instanceof Object // true
    Object instanceof Function // true
```
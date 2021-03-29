var let const 区别

### var
1. 可以重复声明
```
var num = 2
var num = =3
```
2. 作用域： 全局作用域 和 函数作用域
3. var声明的变量，会进行预解析
```
console.log(a) // undefined
var a = 1
```
4. 没有强制声明，容易造成代码混乱
5. 全局作用域下声明，会在全局对象上创建属性
```
var a = 'global'
console.log(this.a) // 浏览器环境中，global
```
### let
1. 同一作用域，不能重复声明
```
let num = 2
let num = 3
```
2. 作用域： 全局作用域 和 块级作用域（一对花括号'{}'）
3. let声明的变量，不会进行预解析
```
console.log(a) // 报错
let a = 1
```
4. 先声明，后使用
5. 全局作用域下声明，不会在全局对象上创建属性
```
let a = 'global'
console.log(this.a) // 浏览器环境中，undefined
```

### const 常量 常量的值是无法（通过重新赋值）改变, 不能被重新声明
1. 常量需要一个初始值
```
const a // Uncaught SyntaxError
```
2. 常量定义为对象或者数组时，可以修改属性
```
const a = {b: 2}
a.b = 3
console.log(a) \\ {b: 3}
```
3. 块级作用域，不支持预解析
```
console.log(a) // ReferenceError
const a = 2
```



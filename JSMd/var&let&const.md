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

### const 常量
1. 必须先赋值，绑定值之后不能再修改
2. 不支持预解析
```
const a = 2
console.log(a)
```



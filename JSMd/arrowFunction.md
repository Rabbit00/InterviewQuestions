# 普通函数 和 箭头函数 的 区别

1. this
普通函数： 内部this，默认指向window，严格模式下指向undefined
箭头函数： 内部的this，与上一级作用域中的this指向同一个地方。

2. arguments
普通函数，可以通过arguments来实现重载；
箭头函数中，没有arguments，代替它功能是剩余参数rest（...）

3. 原型对象
普通函数，是有自己的原型对象的
箭头函数，没有原型对象

4. new
普通函数，可以作为构造函数，通过new实例化出子函数
箭头函数，不能作为构造函数，使用new会报错

5. 简易程度
箭头函数比普通函数的使用简短更多；同时箭头函数通常是匿名函数
箭头函数


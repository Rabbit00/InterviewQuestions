# js 继承的常见方式

1. 原型链继承

2. 借用构造函数继承

3. ES 中class的继承

4. 寄生组合继承
```
    function Parent () {
        this.name = 'parent'
    }
    function Child () {
        Parent.call(this)
        this.type = 'children'
    }
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
```
/**
 * 请说明要输出正确的myName的值要如何修改程序?
 */
foo = function(){
    this.myName = "Foo function.";
}
foo.prototype.sayHello = function(){
    console.log(this.myName);
}
foo.prototype.bar = function(){
    // setTimeout(this.sayHello,1000); // 修改前
    // 修改后
    setTimeout((function (s) {
        return function () {
            s.sayHello()
        }
    })(this),1000);
}
var f = new foo;
// f.bar();
/**
 * 读代码
 */
var myObject = {
    foo: "bar",
    func: function() {
      var self = this;
      console.log(this.foo);  
      console.log(self.foo);  
      (function() {
        console.log(this.foo);  
        console.log(self.foo);  
      }());
    }
  };
// myObject.func();
// bar bar undefined bar

function fn () {
    this.a = 2
    return 1
}
let test1 = new fn()
console.log(test1)
console.log(test1.constructor)

function fn1 () {
    this.a = 2
    return {
        a: 1
    }
}

let test2 = new fn1()
console.log(test2)
console.log(test2.constructor)
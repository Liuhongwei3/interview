// let n = 123;

// function f1() {
//     console.log(n);
// }

// function f2(){
//     let n = 456;
//     f1();
// }

// f2();   // 123
// console.log(n); //  123


// var length = 6;

// function f1() {
//     console.log(this === window);
//     console.log(this.length);
// }

// let obj = {
//     length: 123,
//     f2: function (f1) {
//         let length = 456;
//         console.log(this === obj);  //  true
//         f1();   //  6
//         arguments[0](); //  arguments[0] --- f1() 2
//     }
// }

// obj.f2(f1, 8);


// function f(){
//     console.log(this.a);
// }

// var obj = {
//     a: 2,
//     f
// }

// //  注意：此时如果将 var 替换为 let 则下面 f2() 结果为 undefined，因为 ES6 之后 let/const 定义的变量不再属于顶层对象(window)
// var f2 = obj.f;
// var a = "hello";
// f2();   //  hello
// obj.f();    //  2


// var a = 0, b = 0;
// function A(a) {
//     debugger
//     A = function (b) {
//         alert(a + b++);
//     }
//     alert(a++);
// }
// A(1)    //  1 --- alert(a++) --- a = 2(function)
// A(2)    //  4 ---  alert(a + b++) --- b = 2(function)


function Foo(){
    getName = function(){
        console.log(1);
    }
    return this;
}

Foo.getName = function(){
    console.log(2);
}

Foo.prototype.getName = function(){
    console.log(3);
}

//  优先于声明式
var getName = function(){
    console.log(4);
}

function getName(){
    console.log(5);
}

Foo.getName();  //  2
getName();      //  4
//  Foo() 作为普通函数先执行
Foo().getName();    //  1 --- this(window).getName() --- Foo()改写了全局 getName()
getName();          //  1 --- 全局
// new --- 18    Foo.getName --- 19     new Foo() --- 19
new Foo.getName();  //  2 --- r to l --- new func->2
new Foo().getName();    //  3 --- l to r(both 19) --- prototype.getName(func->3)
//  先执行 new Foo() ---> 实例 xxx
//  再执行 new xxx.getName()
//  r to l new prototype.getName(func->3)
new new Foo().getName();    //  3


let a = 0;
    const obj = {
        a: 1,
        b: function() {
            console.log(this.a);
        }
    }
    const obj1 = {
        a: 2
    }
    const fun = obj.b;
    fun();  //  undefined
    fun.apply(obj); //  1
    fun.bind(obj1).apply(obj);  //  2
    const fun1 = fun.bind(obj1);
    new fun();  //  undefined
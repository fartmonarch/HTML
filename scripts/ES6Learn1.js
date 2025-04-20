// 1.如何定义变量 前面不用定义变量类型
// var myNum = 0;
// var myString = "jsLearn";

// // 2.数据类型
// var myNum = 10;
// var myName = "Coke";
// var myBool = false;
// var myNull = null; //用于清空变量内容,表示空
// var myUn; // undefined 容器的默认值

// console.log(myNum); //控制台输出
// alert(myName); //弹窗输出

// 3.运算符 c++同理 字符串可以使用+直接
// 连接 bool值也可以是直接判断
// 判断相等使用三等号 ===

// 4.语句
// if (myBool) {
//     console.log("好了");
// }
// else {
//     console.log("坏了");
// }

// if () {

// }
// else if () {

// }
// else if () {

// }
// else {

// }

// for (var i = 0; i < 10; i++){
//     console.log(i);
// }

// 5.函数 传参规则基本一样 去除了函数类型
// 全部使用function 即可
// 传参关键词fn甚至可以传函数体 如下
// function getSum(start,end,fn) {
//     var sum = 0;
//     for (var i = start; i <= end; i++){
//         if (fn(i)) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// function condition1(num) {
//     if (num % 2 === 0)
//         return true;
//     else
//         return false;
// }
// var sum1 = getSum(1,100,condition1);
// console.log(sum1);

// 6.数组
// var myArr = [1, 2, 3, 4, 5];
// console.log(myArr.length);
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);
// console.log(myArr); // 也可以直接输出数组
// //更改数组
// myArr.push(100); // 从后push插入
// myArr.unshift(200); // 从前unshift插入
// console.log(myArr);
// //使用for 循环访问数组 不举例了
// //自带一个函数
// myArr.forEach(function (item,index) {
//     console.log(item,index)
// }
// )

// 7.对象 Object
// var myObj = {
//     name: "Coke",
//     age: 20
// }
// console.log(myObj);
// console.log(myObj.name); // 访问单值
// console.log(myObj['name']); //同理

// for (var k in myObj) //访问
// {
//     console.log(k, myObj[k]);
// }

// ES6 学习
// 1. let 和 const
// let 是块级作用域  const 是常量不能更改
let myNum = 0;
let myString = "jsLearn";
const mycount = 100; //常量
myNum = 10; //可以更改
myString = "jsLearn2"; //可以更改
// mycount = 200; //不可以更改

// 2.模板字符串
const str1 = "hello";
const str2 = `使用${str1}world
    这行也被调用`; //使用${}来引用变量
// console.log(str2); //hello$world


// 3.解构赋值
const arr = [1, 2, 3];
const v1 = arr[0];

const [a, b, c] = [1, 2, 3]; //解构赋值
// console.log(a, b, c); //1 2 3

const {username, age: userage, ...otherInfo } = {
    username: 'Coke',
    age: 22,
    gender: '男',
    category: '程序员'
}

// console.log(username); //Coke
// console.log(userage); //22
// console.log(username, userage, otherInfo); 

// 4.数组和对象的扩展使用
// 4.1扩展运算符
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2, 7, 8, 9]; //扩展运算符
// console.log(arr3); //1 2 3 4 5 6 7 8 9

// 4.2对象的扩展

const obj1 = {
    a: 1
}

const obj2 = {
    b: 2
}

const obj3 = {
    myname: 'Coke',
    ...obj1,
    ...obj2
}   
// console.log(obj3); //{myname: "Coke", a: 1, b: 2}

// 4.3 数组方法
function fn() {
    console.log(arguments);
    // arguments.push(4); // 报错
    // arguments.pop(); // 报错
    // Array.from(arguments).forEach(function (item) {
    //     console.log(item);
    // });
}
// // 1. 匿名回调
// [1, 2, 3].forEach(function (num) {
//     console.log(num * 2);
// });
// fn(1, 2, 3); //类数组对象


// 4.3 对象的方法  Object.assign()
const obja = {
    name: 'Coke',
    age: 22
};

const objc = {
    gender: '男'
}
const objb = Object.assign({}, obja, objc);
objb.name = 'Coke2'; //更改对象的值
// console.log(objb);

// 5.Class
class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    instruduce() {
        console.log(`我的名字是${this.name}，今年${this.age}岁`);
    }
}

// const a1 = new A('Coke', 22);
// console.log(a1); //A {name: "Coke", age: 22}
// a1.instruduce(); //我的名字是Coke，今年22岁

class B extends A{
    constructor(name, age, gender) {
        super(name, age); //调用父类的构造函数
        this.gender = gender;
    }

    instruduce() {
        console.log(`我的名字是${this.name}，今年${this.age}岁`,`我是${this.gender}生`);
    }
}

// const b1 = new B('Coke', 22, '男');
// console.log(b1);
// b1.instruduce(); //我的名字是Coke，今年22岁 我是男生

// 6.箭头函数
// const getsum1 = function (x, y) {
//   return x + y;
// };
// console.log(getsum1(1, 2)); //3


// const fn1 = (x, y) => x + y; //箭头函数
// const fn2 = (x, y) => x > y ? x : y;
// const fn3 = n => n * n; //单参数
// const fn4 = (...number) => number.reduce((a, b) => a + b, 0); //剩余参数
// console.log(fn1(1, 2)); //3
// console.log(fn2(1, 2)); //2
// console.log(fn3(3)); //9
// console.log(fn4(1, 2, 3, 4, 5));

// array.reduce(callbackFunction, initialValue)
// 参数说明：
// callbackFunction：处理每个元素的回调函数，包含 4 个参数：

// accumulator（累积值，常用 sum 表示）

// currentValue（当前元素，常用 num 表示）

// currentIndex（可选，当前元素的索引）

// array（可选，原始数组）

// initialValue（可选）：累积值的初始值。如果省略，默认使用数组的第一个元素作为初始值。

// 你的代码解析：
// .reduce((sum, num) => sum + num, 0)
// (sum, num) => sum + num：
// 这是一个箭头函数，表示：

// 每次遍历时，将当前元素 num 加到累积值 sum 上。

// 0：
// 初始累积值设为 0（避免空数组或非数值的问题）。

// reduce() 题目练习

// // 1.求数组元素的和
// const arr1 = [1, 2, 3, 4, 5];
// const sum = arr1.reduce((sum, num) => sum + num, 0)
// console.log(sum);

// // 2.求数组元素的积
// const arr2 = [2, 3, 4];
// const product = arr2.reduce((sum, num) => sum * num, 1);
// console.log(product);

// // 3.字符串拼接
// const arr3 = ['Hello', 'world'];
// const strsum = arr3.reduce((sum, num) => sum + num, '');
// console.log(strsum);

// // 4.求数组最大值
// const arr4 = [6, 2, 3, 4, 5];
// const max = arr4.reduce((sum, num) => num > sum ? num : sum, 0);
// console.log(max);

// // 5.求数组最小值
// const arr5 = [6, 2, 3, 4, 5];
// const min = arr5.reduce((sum, num) => num < sum ? num : sum, Number.MAX_VALUE);
// console.log(min);

// //6.扁平化二维数组
// const arr6 = [[1, 2], [3, 4], [5, 6]];
// const flat = arr6.reduce((sum, num) => sum.concat(num), []);
// console.log(flat); // [1, 2, 3, 4, 5, 6]

// // 7.统计数组中每个元素出现的次数
// const arr7 = ['apple', 'banana', 'apple', 'orange', 'banana'];
// const count = arr7.reduce((sum, num) => {
//     sum[num] = (sum[num] || 0) + 1;
//     return sum;
// }, {});
// console.log(count); // {apple: 2, banana: 2, orange: 1}

// // 8.按条件分组(奇偶)
// const arr8 = [1, 2, 3, 4, 5, 6];   
// const group = arr8.reduce((sum, num) => {
//     const key = num % 2 === 0 ? 'even' : 'odd';
//     sum[key] = (sum[key] || []).concat(num);
//     return sum;
// }, {});
// console.log(group); // {odd: [1, 3, 5], even: [2, 4, 6]}

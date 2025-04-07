// 1.如何定义变量 前面不用定义变量类型
var myNum = 0;
var myString = "jsLearn";

// 2.数据类型
var myNum = 10;
var myName = "Coke";
var myBool = false;
var myNull = null; //用于清空变量内容,表示空
var myUn; // undefined 容器的默认值

console.log(myNum); //控制台输出
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
function getSum(start,end,fn) {
    var sum = 0;
    for (var i = start; i <= end; i++){
        if (fn(i)) {
            sum += i;
        }
    }
    return sum;
}
function condition1(num) {
    if (num % 2 === 0)
        return true;
    else
        return false;
}
var sum1 = getSum(1,100,condition1);
console.log(sum1);

// 6.数组
var myArr = [1, 2, 3, 4, 5];
console.log(myArr.length);
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr); // 也可以直接输出数组
//更改数组
myArr.push(100); // 从后push插入
myArr.unshift(200); // 从前unshift插入
console.log(myArr);
//使用for 循环访问数组 不举例了
//自带一个函数
myArr.forEach(function (item,index) {
    console.log(item,index)
}
)

// 7.对象 Object
var myObj = {
    name: "Coke",
    age: 20
}
console.log(myObj);
console.log(myObj.name); // 访问单值
console.log(myObj['name']); //同理

for (var k in myObj) //访问
{
    console.log(k, myObj[k]);
}

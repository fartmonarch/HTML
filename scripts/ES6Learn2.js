// 1. Promise Async/Await 同步和异步, 常见的异步：定时器 Ajax
// console.log('任务1:...同步');
// console.log('任务2:...同步');
// setTimeout(() => {
//     console.log('任务3:...异步');
//     console.log('任务4:...同步');
//     setTimeout(() => {
//         console.log('任务5:...异步');
//         console.log('任务6:...同步');
//     }, 0);
// }, 0);

// promise

// const p1 = new Promise((resolve, reject) => {
//     // resolve('成功1了得到的数据');
//     reject('失败1了得到的数据');
// });
// // console.log(p1); // Promise { <pending> }

// p1.then((data) => {
//     console.log(data); // 成功1了得到的数据

//     return new Promise((resolve, reject) => {
//         resolve('成功2了得到的数据');
//         //reject('失败2了得到的数据');
//     });
// }, err => {
//     console.log('失败1');
//     throw new Error('任务1失败了');
// })
// .then((data) => {
//     console.log(data); // 成功2了得到的数据
// }, err => {
//   console.log('失败2');
// })

// Async await 同步书写一致的异步
// 步骤1:准备一个返回promise对象的函数
// function asyncTask() {
//   return new Promise((resolve, reject) => {
//     //模拟异步操作
//     const isSuccsee = true;
//     if (isSuccsee) {
//       resolve("2成功了");
//     } else {
//       reject("2失败了");
//     }
//   });
// }

// // 步骤2:为使用await的函数添加async
// async function main() {
//   console.log("任务1:...同步");
//   const data = await asyncTask();
//   console.log(data); // 2成功了
//   console.log("任务3:...同步");
//   // 继续执行其他操作
// }
// main(); // 执行async函数

// 2. Proxy 代理对象
const obj1 = {
  name: "小明",
  age: 18,
  address: {
    city: "北京",
    street: "朝阳",
  },
};
const container = document.getElementById("container");
container.textContent = obj1.name;
// obj1.name = "小红"; //页面没改
// container.textContent = obj1.name; // 页面改了 没使用Proxy代码量很大

const p1 = new Proxy(obj1, {
    get(target, property) {
        return obj1[property]; // 读取属性值
    },
    set(target, property, value) {
        obj1[property] = value; // 设置属性值
        container.textContent = obj1.name; // 页面改了
    }

}); // 代理对象

console.log(p1.name); // 小明
p1.name = '小红'; // 设置属性值
p1.age = 20; // 设置属性值

// 3.Module 模块化  ESM CommonJS(node.js)
import xxxa from './module.js'; // ES6模块化
import xxxb from './module.cjs'; // CommonJS模块化
console.log(xxx); // { name: '小明', age: 18, address: { city: '北京', street: '朝阳' } }
 

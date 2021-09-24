/*
 * @Author: 豆芽
 * @Date: 2021-09-24 09:58:36
 * @LastEditTime: 2021-09-24 19:45:24
 * @LastEditors: Please set LastEditors
 * @Description: 装饰器的使用
 * @FilePath: /fe-study/src/2021/09/24/1.ts
 */

// 类装饰器
function Greeter(target: Function) {
  target.prototype.greet = function () {
    console.log('我是装饰器')
  }
}

@Greeter
class Greeting {
  [x: string]: any
  constructor() {


  }
}

const myGreet = new Greeting()

myGreet.greet()
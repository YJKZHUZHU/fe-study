/*
 * @Author: 豆芽
 * @Date: 2021-09-24 19:42:52
 * @LastEditTime: 2021-09-24 19:50:22
 * @LastEditors: Please set LastEditors
 * @Description: 装饰器
 * @FilePath: /fe-study/src/2021/09/24/2.ts
 */

function Greeter1(desc: string) {
  return function (target: Function) {
    target.prototype.greet = function () {
      console.log(desc)
    }
  }
}

@Greeter1('我叫豆芽')

class Greeting1 {
  [x: string]: any
  
  constructor() {

  }
}

const G1 = new Greeting1()

G1.greet()

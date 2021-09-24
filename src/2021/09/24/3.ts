/*
 * @Author: 豆芽
 * @Date: 2021-09-24 19:53:28
 * @LastEditTime: 2021-09-24 20:09:30
 * @LastEditors: Please set LastEditors
 * @Description: 属性装饰器
 * @FilePath: /fe-study/src/2021/09/24/3.ts
 */

function logProperty(target: any, key: string) {
  delete target[key]
  const backingField = '_' + key

  Object.defineProperty(target, backingField, {
    writable: true,
    enumerable: true,
    configurable: true
  })
  // property getter
  const getter = function (this: any) {
    const currentValue = this[backingField]
    console.log(`Get: ${key} => ${currentValue}`);
    return currentValue
  }

  // property setter
  const setter = function (this: any, newVal: any) {
    console.log(`Set: ${key} => ${newVal}`);
    return this[backingField] = newVal
  }

  // Create new property with getter and setter
  Object.defineProperty(target, key, {
    configurable: true,
    enumerable: true,
    set: setter,
    get: getter
  })
}

class Person {
  @logProperty
  public name: string
  @logProperty
  public age: number
  constructor(name: string) {
    this.name = name
    this.age = 100
  }
}


const Per = new Person('豆芽')
Per.name = '叶俊宽'
Per.age = 10
/*
 * @Author: 豆芽
 * @Date: 2021-08-26 19:29:38
 * @LastEditTime: 2021-08-26 19:30:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-study/src/2021/08/26/new.ts
 */

function objectFactory() {
  const obj = new Object();
  const Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  const ret = Constructor.apply(obj, arguments);

  return typeof ret === "object" ? ret : obj;
}

objectFactory(name, 'cxk', '18')
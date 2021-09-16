/*
 * @Author: your name
 * @Date: 2021-09-07 17:20:17
 * @LastEditTime: 2021-09-07 22:17:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-study/src/2021/09/07/index.ts
 */


const arr = [
  {
    title: '2021',
    data: [1, 2, 3, 4]
  },
  {
    title: '2022',
    data: [1, 2, 3, 4]
  },
  {
    title: '2023',
    data: [1, 2, 3, 4]
  }
]
const arr1 = [
  {
    title: '2021',
    data: [3, 4, 5, 6]
  },
  {
    title: '2022',
    data: [1, 2, 3, 4]
  },
  {
    title: '2023',
    data: [1, 2, 3, 4]
  },
  {
    title: '2024',
    data: [1, 2, 3, 4]
  }
]

interface IExtendParam {
  title: string,
  data: any[],
  [props: string]: any
}

var b = {
  '2021': {
    title: '2021',
    data: []
  }
}

const fn = (target: IExtendParam[], source: IExtendParam[]): IExtendParam[] => {
  const flg: string[] = []
  const s = []
  const result = [...target, ...source]
  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (target[i].title === source[j].title) {
        s.push({
          title: target[i].title,
          data: [...target[i].data, ...source[j].data]
        })
      } else {
        s.push(result[i])
        // break
      }
    }
    // s.push(result[i])
  }
  return s
}

const arr3 = [
  {
    dpId: 14,
    timeStamp: 1631004280646,
    timeStr: "2021-09-07 16:44:40",
    value: "upperalarm",
  },
  {
    dpId: 15,
    timeStamp: 1631004258423,
    timeStr: "2021-09-07 16:44:18",
    value: "upperalarm",
  }
]

const haha = arr3.reduce((memo, item) => {
  const dateInfo = item.timeStr.split(' ');
  const [date, time] = dateInfo;
  const { value, dpId } = item;
  // console.log(memo[date].data)
  memo = {
    ...memo,
    [date]: {
      title: date,
      data: [...memo[date]?.data || [], {
        title: 'jjjj',
        dpId,
        time,
        icon: value,
      }]
    }
  }
  return memo
}, {} as any)

console.log(JSON.stringify(haha))
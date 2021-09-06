/*
 * @Author: your name
 * @Date: 2021-09-06 16:38:35
 * @LastEditTime: 2021-09-06 17:04:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-study/src/2021/09/06/index.ts
 */

const initData = {
  eventTime: "2021-09-01 15:36:02",
  executeRelateObj: {
    associativeEntityId: "1",
    associativeEntityValue: "tempAlarm",
    bindExecutor: "",
    bizDomain: "tempSensorAlarmBind",
    conditionRuleId: "",
    enable: true,
    gmtCreate: 1629707549,
    gmtModified: 1630481847,
    icon: "",
    id: 582182,
    name: "",
    ownerId: "4357013",
    property: "",
    sourceEntityId: "6c8f75ba0d26df1ab1sl2k",
    status: false,
    triggerRuleId: "rutfdUSVUOmtAMGo",
    uid: "ay147321440122090wVC",

  },
  executeTime: "2021-09-01 15:36:03",
  extraInfo: { title: "温度告警", content: "已触发", ruleName: "温度告警" },
  ownerId: "",
  source: "associativeEntityBind",
  triggerDevId: "6c8f75ba0d26df1ab1sl2k",
  triggerDp: "1",
  triggerRuleId: "rutfdUSVUOmtAMGo",
  uid: "ay1619150321362430x5",
  userRead: false,
}

const a = [
  '2021-09-01 15:36:02',
  '2021-09-02 15:36:02',
  '2021-09-02 15:50:02',
  '2021-09-03 15:36:02',
  '2021-09-03 19:36:02',
  '2021-09-04 15:36:02',
  '2021-09-05 15:36:02',
  '2021-09-06 15:36:02',
  '2021-09-07 15:36:02',
  '2021-09-08 15:36:02'
]


const mockData = Array.from({ length: 10 }, (_, index) => index).map((item) => {
  return {
    ...initData,
    executeTime: a[item]
  }
})

const result = mockData.reduce((memo, item) => {
  const [date, time] = item.executeTime.split(' ');
  console.log('date', date)
  memo = {
    ...memo,
    [date]: [...memo[date] || [], item]
  }
  return memo
}, {} as any)

console.log(result)

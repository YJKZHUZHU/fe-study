/*
 * @Author: your name
 * @Date: 2021-09-22 20:21:06
 * @LastEditTime: 2021-09-22 20:26:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-study/src/2021/09/22/4.ts
 */

interface Album {
  artist: string; // 艺术家
  title: string; // 专辑标题
  releaseDate: Date; // 发行日期：YYYY-MM-DD
  recordingType: "studio" | "live"; // 录制类型："live" 或 "studio"
}

const albums: Album[] = [
  {
    artist: "Michael Jackson",
    title: "Dangerous",
    releaseDate: new Date("1991-11-31"),
    recordingType: "studio",
  },
  {
    artist: "Michael Jackson",
    title: "Dangerous",
    releaseDate: new Date("1991-11-31"),
    recordingType: "studio",
  }
];

function pluck<T, K extends keyof T>(record: T[], key: K) {
  return record.map((r) => r[key]);
}

// let releaseDateArr: (string | Date)[]
let releaseDateArr = pluck(albums, 'title');
console.log(releaseDateArr)
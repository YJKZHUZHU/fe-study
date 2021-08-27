/*
 * @Author: 豆芽
 * @Date: 2021-08-26 09:02:35
 * @LastEditTime: 2021-08-26 19:11:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-study/src/2021/08/26/index.ts
 */


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // const newHead = new ListNode(0);
  // let cur = newHead;
  // //创建进位标记
  // let curry = 0;
  // //只要l1或l2不为0就进行循环
  // while (l1 || l2) {
  //   // ts的可选链用法,专门用来处理空值异常
  //   const val1 = l1?.val ?? 0;
  //   const val2 = l2?.val ?? 0;

  //   const val = val1 + val2 + curry;
  //   // floor 表示向下取整（意思就是取离它最近的较小整数，比如11.6取整为11），ceil表示向上取整（意思就是取离它最近的较大整数，比如11.3取整为12）。
  //   // 这个题目里的val如果超过9，应该一般是10-19的数字除以10，所以1.x应该取整为1.
  //   curry = Math.floor(val / 10);
  //   cur.next = new ListNode(val % 10);
  //   // 移动全部指针
  //   if (l1) {
  //     l1 = l1.next;
  //   }
  //   if (l2) {
  //     l2 = l2.next;
  //   }
  //   cur = cur.next;
  // }
  // if (curry) {
  //   cur.next = new ListNode(curry);
  // }
  // return newHead;
  let head = null, tail:any = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
};


// 非链表解法
function addTwoNumbers1(l1: number[], l2: number[]): number[] {
  const result = parseInt(l1.join('')) + parseInt(l2.join(''))
  return result.toString().split('').map(d => +d).reverse()
};


console.log(addTwoNumbers(null,null))

import {sum, takeWhile, even} from "./util"

let fibs = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

function evenFibsBelow(n) {
  return takeWhile(x => x <= n, fibs).filter(even)
}

console.log(sum(evenFibsBelow(4000000)))

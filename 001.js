import {sum, range} from "/home/coleman/Git/euler.js/util.js"

function multiplesOf3Or5Below(n) {
  return range(1, n - 1).filter(x => x % 3 == 0 || x % 5 == 0)
}

console.log(sum(multiplesOf3Or5Below(1000)))

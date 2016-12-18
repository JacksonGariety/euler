export function sum(arr) {
  return arr.reduce((a, b) => a + b);
}

export function range(start, end) {
  return Array.apply(null, Array(end - start + 1))
              .map((_, i) => start + i)
}

export function even(n) {
  return n === parseFloat(n) ? !(n % 2) : void 0;
}

export function takeWhile(test, iterable) {
  let result = [];

  for (var n of iterable) {
    if (!test(n)) { return result }
    result.push(n)
  }
}

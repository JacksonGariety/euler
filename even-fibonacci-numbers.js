/*
 * Problem 2: Even Fibonacci numbers
 */

!function efn(n) {
  var n = n || 4000000
    , i = 1
    , j = 1
    , s = 0
  
  while (i < n) {
    if (!(i % 2)) s += i
    i += j
    j = i - j
  }
  
  console.log(s)
  return s
}(process.argv[2])
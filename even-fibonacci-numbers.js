/*
 * Problem 2: Even Fibonacci numbers
 */

!function () {
  var i = 1
    , j = 1
    , s = 0
  
  while (i < 4000000) {
    if (!(i % 2)) s += i
    i += j
    j = i - j
  }
  
  return s
}()
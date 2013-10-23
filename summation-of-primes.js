/*
 * Problem 10: Summation of primes
 */

!function sop(n) {
  var n = n || 2000000
    , s = 0
  
  while (n--) {
    if (isPrime(n)) s += n
  }
  
  console.log(s)
  return s
  
  // Private
  function isPrime(n) {
    var m
    
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false
    if (n % 2 == 0) return n == 2
    if (n % 3 == 0) return n == 3
    
    m = Math.sqrt(n)
    for (var i = 5; i <= m; i += 6) {
      if (n % i == 0) return false
      if (n % (i + 2) == 0) return false
    }
    
    return true
  }
}(process.argv[2])
/*
 * Problem 16: Power digit sum
 */

!function pds(e) {
  var n = [1]
    , s = 0
  
  var i = e || 1000
  while (i--) {
    var o = 0
    
    var j = 0, c = n.length + 1
    while (j < c) {
      var d = n[j] || 0

      d = 2 * d + o

      if (d > 9) {
        d -= 10
        o = 1
      } else o = 0

      n[j] = d
      
      j++
    }
  }
  
  var k = 1000
  while (k--) {
    s += n[k]
  }
  
  return s
}(process.argv[2])
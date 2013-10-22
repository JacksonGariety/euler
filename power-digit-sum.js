/*
 * Problem 16: Power d s
 */

!function (n) {
  var n = [1]
    , s = 0
  
  var i = 1000
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
  
  return console.log(s)
}()
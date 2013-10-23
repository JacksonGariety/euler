/*
 * Problem 15: Lattice paths
 */

!function (k, n) {
  var k = k || 20
    , n
    , s
  
  Number.prototype.choose = function (k) {
    var i = this - (this - (k + 1))
    while (i--) {
      
    }
    (self-k+1 .. self).inject(1, &:*) / (2 .. k).inject(1, &:*)
  }
  
  n = n || 40
  
  s = n.choose(k)
  
  console.log(s)
  return s
}(process.argv[2], process.argv[3])
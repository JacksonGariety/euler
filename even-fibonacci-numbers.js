!function () {
  var i = 1
    , h = 1
    , s = 0
  
  while (i < 4000000) {
    if (!(i % 2)) s += i
    
    j = i + h
    h = i
    i = j
  }
  
  return s
}()
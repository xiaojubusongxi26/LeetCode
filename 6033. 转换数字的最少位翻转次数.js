/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
 var minBitFlips = function(start, goal) {
  let s = parseInt(start).toString(2);
  let g = parseInt(goal).toString(2);
  const maxlen = Math.max(s.length, g.length)
  if (s.length > g.length) {
      let cha = s.length - g.length
      for (let i = 0; i < cha; i++) {
          g = "0" + g
      }
  } else if (g.length > s.length) {
      let cha = g.length - s.length
      for (let i = 0; i < cha; i++) {
          s = "0" + s
      }
  }
  let size = 0
  for (let i = 0; i < maxlen; i++) {
      if (s[i] !== g[i]) {
          size++
      }
  }
  return size
};
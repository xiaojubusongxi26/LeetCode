/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
 var findWinners = function(matches) {
  const n = matches.length
  let max = 0
  let gradew = new Map(), gradel = new Map()
  for (let i = 0; i < n; i++) {
      if (gradew.has(matches[i][0])) {
          let num = gradew.get(matches[i][0])
          gradew.set(matches[i][0], num + 1)
      } else {
          gradew.set(matches[i][0], 1)
      }
      if (gradel.has(matches[i][1])) {
          let num = gradel.get(matches[i][1])
          gradel.set(matches[i][1], num + 1)
      } else {
          gradel.set(matches[i][1], 1)
      }
  }
  let ans = Array(2).fill(0).map(() => Array(gradel.size).fill(0))
  let lenw = 0, lenl = 0
  gradel.forEach((value,key) => {
      console.log(value,key)
      if (value === 0) {
          ans[0][lenw++] = key
      } else if (value === 1) {
          ans[1][lenl++] = key
      }
  })
  gradew.forEach((value,key) => {
      console.log(value,key)
      if (!gradel.has(key)) {
          ans[0][lenw++] = key
      }
  })
  ans[0] = ans[0].splice(0, lenw)
  ans[1] = ans[1].splice(0, lenl)
  ans[0].sort(function(a, b){return a-b})
  ans[1].sort(function(a, b){return a-b})
  return ans
};
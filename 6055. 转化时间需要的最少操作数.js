/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
 var convertTime = function(current, correct) {
  let hour = Number(correct.slice(0, 2)) - Number(current.slice(0, 2))
  let m = Number(correct.slice(3, 5)) - Number(current.slice(3, 5))
  if (m < 0) {
      hour -= 1
      m = Number(correct.slice(3, 5)) - Number(current.slice(3, 5)) + 60
  }
  let size = hour
  console.log(size, m)
  while (Math.abs(m)) {
      if (m > 15) {
          size++
          m -= 15
      } else if (m === 15) {
          size++
          break
      } else if (m > 5) {
          size++
          m -= 5
      } else if (m === 5) {
          size++
          break
      } else if (m > 1) {
          size++
          m -= 1
      } else {
          size++
          break
      }
  }
  return size
};
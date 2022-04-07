// 暴力解法
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {
  if (s.length !== goal.length) {
      return false
  }
  for (let i = 0; i < s.length; i++) {
      if (s[i] === goal[0]) {
          let str = s.slice(i, s.length) + s.slice(0, i)
          if (str === goal) {
              return true
          }
      }
  }
  return false
};

// 搜索子字符串
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {
  return ((s + s).indexOf(goal) === -1 || s.length != goal.length) ? false : true
};
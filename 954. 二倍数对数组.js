/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canReorderDoubled = function(arr) {
  const cnt = new Map()
  for (const x of arr) {
      cnt.set(x, (cnt.get(x) || 0) + 1)
  }
  if ((cnt.get(0) || 0) % 2 !== 0) {
      return false;
  }

  const vals = []
  for (const x of cnt.keys()) {
      vals.push(x)
  }
  vals.sort((a, b) => Math.abs(a) - Math.abs(b))
  console.log(...vals)
  for (const x of vals) {
      if ((cnt.get(2 * x) || 0) < cnt.get(x)) {
          return false
      }
      cnt.set(2 * x, (cnt.get(x * 2) || 0) - cnt.get(x))
  }
  return true
};

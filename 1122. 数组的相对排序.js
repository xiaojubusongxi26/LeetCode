/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
  let back = [];
  let res = [];
  let map = new Map;
  for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
          back.push(arr1[i]);
      } else {
          map.set(arr1[i], map.has(arr1[i]) ? map.get(arr1[i]) + 1 : 1);
      }
  }
  for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < map.get(arr2[i]); j++) {
          res.push(arr2[i]);
      }
  }
  back = back.sort((a, b) => a - b);
  return [...res, ...back];
};
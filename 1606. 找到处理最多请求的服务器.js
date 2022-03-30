/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */

 var busiestServers = function(k, arrival, load) {
  let n = arrival.length
  let queue = Array(k).fill(0)
  let max = 0, server = Array(k).fill(0), serverWord = Array(k).fill(0)
  for (let i = 0; i < n; i++) {
      // 寻找空闲服务器
      let j = i % k
      let  minIndex = -1
      let time = arrival[i]
      while (j < k) {
          if (queue[j] <= time || queue[j] === 0) {
              minIndex = j
              break;
          }
          j++
      }
      if (minIndex === -1) {
          j = 0
          while (j < i % k) {
              if (queue[j] <= time || queue[j] === 0) {
                  minIndex = j
                  break;
              }
              j++
          }
      }
      if (minIndex === -1) continue
      // 更新服务器工作截止时间
      queue[minIndex] = load[i] + time
      
      // 更新服务器处理消息次数
      server[minIndex]++
      if (server[minIndex] > max) {
          // 新的最大值，重新记录服务器
          len = 0
          max = server[minIndex]
          serverWord[len++] = minIndex
      } else if (server[minIndex] ===  max) {
          // 达到当前最大处理次数，记录
          serverWord[len++] = minIndex
      }
  }
  return serverWord.slice(0, len)
};
// 方法一：广度优先
var findMinHeightTrees = function(n, edges) {
  const ans = [];
  if (n === 1) {
      ans.push(0);
      return ans;
  }
  const adj = new Array(n).fill(0).map(() => new Array());
  for (const edge of edges) {
      adj[edge[0]].push(edge[1]);
      adj[edge[1]].push(edge[0]);
  }

  const parent = new Array(n).fill(-1);
  /* 找到与节点 0 最远的节点 x */
  const x = findLongestNode(0, parent, adj);
  /* 找到与节点 x 最远的节点 y */
  let y = findLongestNode(x, parent, adj);
  /* 求出节点 x 到节点 y 的路径 */
  const path = [];
  parent[x] = -1;
  while (y !== -1) {
      path.push(y);
      y = parent[y];
  }
  const m = path.length;
  if (m % 2 === 0) {
      ans.push(path[Math.floor(m / 2) - 1]);
  }
  ans.push(path[Math.floor(m / 2)]);
  return ans;
}

const findLongestNode = (u, parent, adj) => {
  const n = adj.length;
  const queue = [];
  const visit = new Array(n).fill(false);
  queue.push(u);
  visit[u] = true;
  let node = -1;

  while (queue.length) {
      const curr = queue.shift();
      node = curr;
      for (const v of adj[curr]) {
          if (!visit[v]) {
              visit[v] = true;
              parent[v] = curr;
              queue.push(v);
          }
      }
  }
  return node;
};


// 方法二：拓扑排序
var findMinHeightTrees = function(n, edges) {
    const ans = []
    if (n === 1) {
        ans.push(0)
        return ans
    }

    // 记录节点的度
    const degree = new Array(n).fill(0)
    // 保存每个节点的连接关系
    const adj = new Array(n).fill(0).map(x => new Array())
    for (const item of edges) {
        adj[item[0]].push(item[1])
        adj[item[1]].push(item[0])
        degree[item[0]]++
        degree[item[1]]++
    }

    // 保存度为1的节点
    const queue = []
    for (let i = 0; i < degree.length; i++) {
        if (degree[i] === 1) {
            queue.push(i)
        }
    }

    // 剩余节点数量
    let remainNode = n
    while (remainNode > 2) {
        // 度为1的节点数
        const len = queue.length
        remainNode -= len
        // 删除度为1的节点
        for (let i = 0; i < len; i++) {
            // 要删除节点的位置
            const curr = queue.shift()
            // 减小该点所连节点的度
            for (const j of adj[curr]) {
                degree[j]--
                if (degree[j] === 1) {
                    queue.push(j)
                }
            }
        }
    }
    // 保存度最高的节点
    while (queue.length) {
        ans.push(queue.shift())
    }
    return ans
};
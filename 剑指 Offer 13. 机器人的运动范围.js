/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    const visited = Array.from(Array(m), () => Array(n).fill(false));
    // 计算x坐标和y坐标的值
    function sum(num){
        let ans = 0;
        while(num){
            ans += num % 10;
            num = Math.floor(num / 10);
        }
        return ans;
    }
    function dns(x, y){
        // 如果超出边界或者访问过就返回0
        if(x >= m || y >= n || sum(x) + sum(y) > k || visited[x][y]) return 0;
        // 标记为已访问
        visited[x][y] = true;
        return dns(x + 1, y) + dns(x, y + 1) + 1;
    }
    return dns(0, 0);
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  let size = 0, m = board.length, n = board[0].length;
  let deepth = word.length;
  const dfs = function(a,b,size) {
      if (a < 0 || a >= m || b < 0 || b >= n) {
          return false;
      }
      if (board[a][b] == ' ') return false;
      if (board[a][b] ===  word[size]) {
          size++;
          board[a][b] = ' '
      } else return false
      if (size >= deepth) return true;
      let ret = (dfs(a - 1, b, size)) || (dfs(a + 1, b, size)) || (dfs(a, b - 1, size)) || (dfs(a, b + 1, size))
      board[a][b] = word[size - 1]
      return ret
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (dfs(i, j, size)){
              return true;
          }
      }
  }
  
  return false;
};
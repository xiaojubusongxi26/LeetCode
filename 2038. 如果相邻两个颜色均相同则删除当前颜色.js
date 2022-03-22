
var winnerOfGame = function (colors) {
      let num = 0
      for (let i = 1; i < colors.length-1; i++) {
          if (colors[i] == 'A' && colors[i - 1] == 'A' && colors[i + 1] == 'A') {
              num++
          }
          if (colors[i] == 'B' && colors[i - 1] == 'B' && colors[i + 1] == 'B') {
              num--
          }
      }
      return num > 0
  };
  
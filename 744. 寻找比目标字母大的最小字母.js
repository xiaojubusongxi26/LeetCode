/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
  for(let item of letters) {
      if (item > target) {
          return item
      }
  }
  return letters[0]
};
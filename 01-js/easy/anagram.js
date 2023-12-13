/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let map = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (map.get(str1.charAt(i))) {
      map.set(str1.charAt(i), Number(map.get(str1.charAt(i))) + 1);
    } else {
      map.set(str1.charAt(i), 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (map.get(str2.charAt(i))) {
      map.set(str2.charAt(i), Number(map.get(str2.charAt(i))) - 1);
    }
  }
  for (let value of map.values()) {
    if (value != 0) return false;
  }
  return true;
}

console.log(isAnagram('Debit Card', 'Bad Credit'));
module.exports = isAnagram;

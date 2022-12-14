// You are given a string s that consists of only lowercase English letters.
// If vowels ("a","e","i","o", and "u") are given a value of 1 and consonants are given
// a value of 2, return the sum of all of the letters in the input string.

// Example:
// For s = "abcde", the output should be countVowelsConsonants(s) = 8.

// Hint:
// split()
// reduce()

function countVowelConsonant(str) {
  // write code here
  const vowels = ["a", "e", "i", "o", "u"];
  const strArray = str.split("");

  const totalCount = strArray.reduce((sum, letter) => {
    return sum + (vowels.includes(letter) ? 1 : 2);
  }, 0);

  return totalCount;
}

console.log(countVowelConsonant("abcde"));

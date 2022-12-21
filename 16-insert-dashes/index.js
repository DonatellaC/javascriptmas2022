// Instructions:
// Transform a given sentence into a new one with dashes between each two consecutive letters.

// Example

// For inputString = "aca caba", the output should be insertDashes(inputString) = "a-c-a c-a-b-a".

// Hint

// join()
// split()

function insertDashes(arr) {
  return arr
    .split(" ")
    .map((word) => word.split("").join("-"))
    .join(" ");
  // return arr.split("").join("-").split("- -").join(" ");
}
console.log(insertDashes("a-b-a c-a-b-a"));

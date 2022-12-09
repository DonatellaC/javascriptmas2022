function validTime(str) {
  let splitArr = str.split(":");
  let hours = parseInt(splitArr[0]) > 23;
  let minutes = parseInt(splitArr[1]) > 59;
  return hours || minutes ? false : true;
}

console.log(validTime("13:58"));
console.log(validTime("25:51"));
console.log(validTime("02:76"));

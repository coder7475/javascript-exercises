const reverseString = function(word) {
  const length = word.length;
  let newString = "";

  for (let x = length - 1; x >= 0; x--) {
    newString += word[x];
  }

  return newString;
};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function(string, num) {
  if (num < 0)
    return "ERROR";

  let final = "";

  while (num--) {
    final += string;
  }

  return final;
};

const ans = repeatString("hey", 2);
console.log(ans);
// Do not edit below this line
module.exports = repeatString;

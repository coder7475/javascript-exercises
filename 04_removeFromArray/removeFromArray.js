const removeFromArray = function(givenArray, ...rest) {
  const ans = [];
  const l = givenArray.length;

  for (let i = 0; i < l; i++) {
    if (!rest.includes(givenArray[i])) {
      ans.push(givenArray[i])
    }
  }

  return ans;
};

// Do not edit below this line
module.exports = removeFromArray;

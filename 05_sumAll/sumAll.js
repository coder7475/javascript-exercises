const sumAll = function(a, b) {
  if (a < 0 || b < 0 || typeof(a) != "number" || typeof(b) != "number")
    return "ERROR";

  let sum = 0;
  let low = 0;
  let high = 0;
  if (a < b){
    low = a;
    high = b;
  } else {
    low = b;
    high = a;
  }

  for (let index = low; index <= high; index++)
    sum += index;      

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

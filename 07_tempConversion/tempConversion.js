const ftoc = function(fahreinheit) {
  return Number(((fahreinheit - 32) * 5/9).toFixed(1));
};

const ctof = function(celsius) {
  return Number((celsius * 9 / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

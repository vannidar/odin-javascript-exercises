const sumAll = function(first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second) || first < 0 || second < 0) return "ERROR";
    let sum = 0;
    const end = Math.max(first, second);
    for (let i = Math.min(first, second); i <= end; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

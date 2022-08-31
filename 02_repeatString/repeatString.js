const repeatString = function(ogStr, numRep) {
    if (numRep < 0) return "ERROR";
    let str = "";
    for (let i = 0; i < numRep; i++) str += ogStr;
    return str;
};

// Do not edit below this line
module.exports = repeatString;

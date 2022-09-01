const removeFromArray = function(arr, ...valsToRemove) {
    /*
    console.log(arr);
    for (let i = 0; i < valsToRemove.length; i++) {
        elementIndex = arr.findIndex((element) => element === valsToRemove[i])
        if (elementIndex >= 0) {
            console.log(`Found match at index ${elementIndex}`);
            arr.splice(elementIndex, 1);
        }
    }
    console.log(arr);
    */
    return arr.filter((element) => !valsToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;

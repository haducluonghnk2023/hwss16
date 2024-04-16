"use strict";
function PutInArr(array) {
    const result = [];
    for (const item of array) {
        if (Array.isArray(item)) {
            result.push(...PutInArr(item));
        }
        else {
            result.push(item);
        }
    }
    return result;
}
const arr11 = [1, [2, [3, 4], 5], 6];
const putArr = PutInArr(arr11);
console.log(putArr);

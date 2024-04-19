"use strict";
function identity(param) {
    return param;
}
const result1 = identity(123);
const result2 = identity("Hello");
const result3 = identity(true);
const result4 = identity([1, 2, 3]);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

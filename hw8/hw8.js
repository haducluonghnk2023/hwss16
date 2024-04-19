"use strict";
function merge(param1, param2) {
    let obj = {};
    let subObj = {};
    for (let key in param1) {
        obj = Object.assign(Object.assign({}, obj), { [key]: param1[key] });
    }
    for (const key in param2) {
        subObj = Object.assign(Object.assign({}, subObj), { [key]: param2[key] });
    }
    let mergeObj = Object.assign(Object.assign({}, obj), subObj);
    return mergeObj;
}
let obj1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    },
    f: "a"
};
let obj2 = {
    a: 5,
    b: {
        c: 6,
        d: [7, 8],
        e: {
            f: 9
        },
    },
    g: 10,
    w: "234",
    f: "tge"
};
console.log(merge(obj1, obj2));

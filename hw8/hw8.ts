function merge<T,U>(param1:T,param2:U):object{
    let obj = {}
    let subObj = {}
    for (let key in param1) {
        obj = { ...obj, [key]: param1[key] }
        
    }
    for (const key in param2) {
        subObj = { ...subObj, [key]: param2[key] }
    }
    let mergeObj = {...obj,...subObj}
    return mergeObj    
    
}

let obj1 = {
    a:1,
    b:{
        c:2,
        d:[3,4]
    },
    f:"a"
}
let obj2 = {
    a:5,
    b:{
        c:6,
        d:[7,8],
        e:{
            f:9
        },
    },
    g:10,
    w:"234",
    f:"tge"
}
console.log(merge(obj1,obj2));

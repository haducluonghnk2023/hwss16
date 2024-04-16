function checkAllFunction<T>(param:T){
    if(typeof param === "number"){
        return param
    }else if(typeof param === "string"){
        return param
    }   
    else{
        return [param]
    }
}
console.log(checkAllFunction([1,2,3]));
console.log(checkAllFunction(1));
console.log(checkAllFunction(["a","b","c"]));


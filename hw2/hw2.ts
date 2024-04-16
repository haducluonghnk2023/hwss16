function checkAll<T>(param:T[],index1:number,index2:number) {
    if(index1 <0  || index1 >param.length || index2 < 0|| index2 >param.length ){
        return "looix"
    }
    const temp = param[index1];
    param[index1] = param[index2];
    param[index2] = temp;
    return param;

}
const arr = [1,2,3,4,5];
let arr1 = checkAll(arr,1,4);
console.log(arr1);

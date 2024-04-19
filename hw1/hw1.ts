function identity<T>(param: T): T {
    return param;
}

const result1: number = identity(123); 
const result2: string = identity("Hello"); 
const result3: boolean = identity(true); 
const result4: number[] = identity([1, 2, 3]);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

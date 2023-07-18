// const nums = [4, 1, -20, -7, 5, 9, -6];

// const removeNeg = (nums, myCallBack) => {
//     const myArr = [];
//     Array.from(nums, (e) => {
//         myCallBack(e) ? myArr.push(e) : console.log(e);     
//     })
//     return myArr;
// }

// const postNums = removeNeg(nums, (x) => x >= 0);
// console.log(postNums);

const printStr = (callback) => {
    
    setTimeout(() => {
        const str = "print through callback function";
        callback(str);
    }, 2000)
}

const callback = (value) => {
    console.log(value);
} 

printStr(callback);
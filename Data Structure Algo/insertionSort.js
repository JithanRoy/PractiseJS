const arr = [4,3,5,2,8,1,9];

for(let i = 1; i < arr.length - 1; i++) {
    for(let j = i; j > 0; j--) {
        if(arr[j] < arr[j - 1]){
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        } else {
            break;
        }
    }
}

console.log(arr);

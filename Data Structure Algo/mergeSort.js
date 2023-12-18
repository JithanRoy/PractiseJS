const mergeSort = (arr, temp, low, high) => {
    if (low == high) {
        return;
    }
    let mid = Math.floor((low + high) / 2);

    mergeSort(arr, temp, low, mid);
    
    mergeSort(arr, temp, mid+1, high);

    for(let i=low, j= mid+1, k=low; k <= high; k++) {
        if(i == mid+1) {
            temp[k] = arr[j];
            k++;
        } else if (j == high+1){
            temp[k] = arr[i];
            i++;
        } else if (arr[i] > arr[j]) {
            temp[k] = arr[j];
            j++;
        } else if (arr[i] < arr[j]) {
            temp[k] = arr[i];
            i++;
        }
    }

    for(let k = 0; k <= high; k++) {
       arr[k] = temp[k]; 
    }
}

let demoArr = [4,2,6,8];
let low = 0;
temp = [];
let high = demoArr.length - 1;

mergeSort(demoArr, temp, low, high);
console.log(demoArr);
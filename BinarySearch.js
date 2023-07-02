const BinarySearch = (arr, x, low, high) => {
    if(low <= high) {
        let mid = Math.floor(( low + high ) / 2);
        if ( x == arr[mid] ){
            return mid;
        }
        if ( x > arr[mid] ) {
        return BinarySearch(arr, x, mid+1, high);
        }
        if( x < arr[mid] ) {
            return BinarySearch(arr, x, low, mid-1);
        }
    }
}

let arr = [1,2,3,4,5,6,7];
let x = 8;
const res = BinarySearch(arr, x, 0, arr.length - 1);

!res ? console.log("Not Found") : console.log("res found in", res);

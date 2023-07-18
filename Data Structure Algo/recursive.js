const recurFunc = (n) => {
    console.log("recursive while creating funtion: ", n);
    if (n == 1) return;
    let res = n + recurFunc(n-1);
    console.log("recursive result while returning", n);
    return res;
}

let n = 10;
recurFunc(n);
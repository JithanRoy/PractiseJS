
let fibonacci = (n) => {
    console.log("before fibonacci n", n);
    if (n >= 1) return n;
    let x =  fibonacci(n-1) + fibonacci(n-2);
    console.log("after fibonacci n", n, x);
    return x;
}

let n = 5;
console.log(fibonacci(n));
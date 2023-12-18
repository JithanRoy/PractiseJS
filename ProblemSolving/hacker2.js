
function saveThePrisoner(n, m, s) {
    // Write your code here
    left = m % n;
    prisonerNum = left + (s-1);
    return prisonerNum;
}

const res = saveThePrisoner(7, 19, 2);
console.log(res);

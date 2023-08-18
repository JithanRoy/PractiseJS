
const isPalimdrome = (inp) => {
    let num = inp.toString();
    let start = 0;
    let en = inp.length - 1;
    return Palindrome(start, en, num);
}

const Palindrome = (start, en, num) => {
    if(start > en){
        return true;
    }
    else if (num[start] === num[en]){
       return Palindrome(start+1, en-1, num);
    }
    else {
        return false;
    }
}

const inp = '121';
const res = isPalimdrome(inp);
console.log(res);
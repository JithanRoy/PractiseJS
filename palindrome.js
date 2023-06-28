const palindrome = (text, len, start) => {
    console.log("palindrome is calling before creating func", start , len);
    if (text[start] == text[len]) {
        if ( start > len ) return;
        let x = palindrome(text, len-1, start+1);
        console.log("palindrome is calling after creating func", start , len);
        return true;
    } else {
        return false;
    }
}

let text = 'abbbbbbba';
let len = text.length - 1;
let start = 0;
if (palindrome(text, len, start)) {
    console.log("palindrome");
} else {
    console.log("not palindrome");
}
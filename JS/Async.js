const getNum = () => {
    let str = 'I Love Myself';
    setTimeout(() => {
        console.log(str);
    }, 3000)
    return str;
}

const getRes = getNum();
console.log(getRes);
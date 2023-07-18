const dubElement = [ "🍌","🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍊", "🍊", "🍓", "🍓", "🍉", "🍉", "🍉", "🍍", "🍍", "🍒", "🍒", "🥝", "🥝", "🥝", "🍑", "🍑", "🍐", "🍐", "🍅", "🍅", "🍅"];
const str = 'I love Bangladesh';
const sortLength = "Java is a programming language";

const resObj = (data) => {
    const dataObj = {};
    Array.from(data, (e) => {
        dataObj[e] = (dataObj[e] || 0) + 1;
    })
    return dataObj;
}

const strReverse = (str) => {
    return str.split(" ").map((e) => e.split("").reverse().join("") );
}

const sortAsLength = (data) => {
    return data.split(" ").sort((a,b) => a.length - b.length).join(" ");
}

console.log(resObj(dubElement)); 
// console.log(strReverse(str));
// console.log(sortAsLength(sortLength));

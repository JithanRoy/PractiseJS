const nums = [
    {name: 'rashed', money: 12},
    {name: 'kased', money: 22},
    {name: 'based', money: 23},
];

nums.map((num) => num*2);
const Total = nums.reduce((sum, num) => {
    return sum + num.money; 
}, 
0);

console.log(Total);


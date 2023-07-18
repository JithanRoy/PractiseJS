// const getNum = () => {
//     let str = 'I Love Myself';
//     setTimeout(() => {
//         console.log(str);
//     }, 3000)
//     return str;
// }

// const getRes = getNum();
// console.log(getRes);

const getName = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Sariful");
    }, 5000)
    
})  

const getAge = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if("Sariful"){
                resolve(30);
            } else {
                reject("you are dead");
            }
        }, 3000)

    })
}

const allPromise = async () => {
  const name = await getName.then((data) => data);
  const age  = await getAge();
  console.log('My name is ' + name + ' and my age is ' + age);
}

allPromise();
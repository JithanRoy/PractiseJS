const aPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve("success in code");
            }  else {
                reject("reject in code");
            }
        }, 3000)
    })

const aPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve("promise2");
            } else {
                reject("promise2 rejected");
            }
        }, 3000)
    })

Promise.all([aPromise, aPromise2]).then((dataArr) => {console.log(dataArr)});
// let arr1 = [3,5,3,7];
// let copyArr = arr1;
// let copyArr = [...arr1];
// let copyArr = [...arr1, 55, 66, [44, 55, 66, 77]];
// arr1.push(100);
// copyArr[6].push(200);

// console.log(typeof(copyArr[2]));
// console.log(arr1);

// for (var i = 0; i < copyArr.length; i++) {
//     if (Array.isArray(copyArr[i])) {
//         console.log(i);
//     }
// }


const myObject = {
    name: "John Doe",
    age: 30,
    city: "New York",
    hobbies: ["reading", "painting", "running"],

    address: {
      street: "123 Main Street",
      city: "New York",

      Employee: {
        code: "10001",
        city: "New York",
        state: "NY",
        country: "United States",

        Employee2: {
            presentAddress: "123 Main Street",

            permanentAddress: {
                city: "New York",
                state: "NY",
                country: "United States",

                address: {
                    presentAddress2: "123 Main Street",

                    performanceAddress: {
                        city: "New York",
                        country: "United States"
                    }
                }
            }
        },
      },
    },
  };

// let objData = myObject;
// myObject.address.street = "ABC";

let objData = {...myObject, address: {...myObject.address, street: "ABC", Employee: { ...myObject.address.Employee, city: "ABC"}}};
// objData.address.street = "ABC";


console.log("objdata", objData);
console.log("myObject", myObject);
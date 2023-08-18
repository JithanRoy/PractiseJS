class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age(x) {
        return x - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

console.log(date, year);

// const myCar = new Car("corolla", 2019);
// console.log(myCar.age(2023)); 
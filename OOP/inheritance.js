class Player {
    #name;
    #age;
    constructor(name , age){
        this.#name = name;
        this.#age = age;
    }

    getPlayerDetails() {
        return `${this.#name} is ${this.#age} years old`;
    }
}

class Cricketer extends Player {
    #centuries
    constructor(name, age, centuries){
        super(name, age);
        this.#centuries = centuries;
    }
}

class Footboller extends Player {
    #goal
    constructor(name, age, goal) {
        super(name, age)
    }

}

const sakib = new Cricketer('sakib', 34, 15);
const ronaldo = new Footboller('ronaldo', 37, 200);
console.log(sakib.getPlayerDetails());
console.log(ronaldo.getPlayerDetails());

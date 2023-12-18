class Player {
    constructor(name, birthday, noOfMonths, monthlySalary) {
        this.name = name;
        this.birthday = birthday;
        this.noOfMonths = noOfMonths;
        this.monthlySalary = monthlySalary;
    }

    calculate_age() {
        let diff_ms = Date.now() - new Date(this.birthday).getTime();
        let age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    calculate_salary() {
        return (this.monthlySalary * this.noOfMonths).toLocaleString();
    }
}

const Sakib = new Player('sakib', '1996-06-16', 12, 40000);
const Rakib = new Player('Rakib', '1996-06-16', 12, 25000)

console.log(Rakib.calculate_age());
console.log(Rakib.calculate_salary());
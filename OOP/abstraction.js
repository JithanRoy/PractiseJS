class BetterArray {
    #items;
    constructor() {
        this.#items = [];
    }

    getItems() {
        return [...this.#items];
    }

    addItems(item) {
        this.#items.push(item);
    }
    removeItem(itemToRemove) {
        this.#items = this.#items.filter((item) => item !== itemToRemove);
    }
}

const array = new BetterArray();
array.addItems("I Love Bangladesh");
console.log(array.getItems());
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}
exports.Item = Item;
//# sourceMappingURL=item.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(name, price) {
        this.name = name;
        this.price = price;
    }
    Item.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Price: ").concat(this.price));
    };
    return Item;
}());
exports.Item = Item;

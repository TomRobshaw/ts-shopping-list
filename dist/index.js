"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("./item");
const readline = __importStar(require("readline"));
const questionPrompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Welcome to the store!');
const list = [];
questionPrompt.question('What item would you like to add? ', (name) => {
    questionPrompt.question('What is the price of the item? ', (price) => {
        const item = new item_1.Item(name, parseFloat(price));
        list.push(item);
        list.forEach((item) => {
            console.log(`Name: ${item.name}, Price: ${item.price}`);
        });
        questionPrompt.close();
    });
});
//# sourceMappingURL=index.js.map
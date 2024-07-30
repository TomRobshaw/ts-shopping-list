"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var item_1 = require("./item");
var readline = require("readline");
var displayList = function (list) {
    if (list.length === 0) {
        console.log('No items in list');
    }
    else {
        list.forEach(function (item, index) {
            console.log('List of items:');
            console.log("".concat(index + 1, ". ").concat(item.name, ", $").concat(item.price));
        });
    }
};
var questionPrompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var list = [];
var promptUser = function () {
    questionPrompt.question('What would you like to do? Add/View/Edit/Delete/Exit: ', function (response) {
        if (response.toLowerCase() === 'add') {
            questionPrompt.question('What item would you like to add? ', function (name) {
                questionPrompt.question('What is the price of the item? ', function (price) {
                    var item = new item_1.Item(name, parseFloat(price));
                    list.push(item);
                    displayList(list);
                    promptUser();
                });
            });
        }
        else if (response.toLowerCase() === 'delete') {
            questionPrompt.question('What item would you like to delete? ', function (name) {
                var index = list.findIndex(function (item) { return item.name === name; });
                if (index !== -1) {
                    list.splice(index, 1);
                }
                displayList(list);
                promptUser();
            });
        }
        else if (response.toLowerCase() === 'view') {
            displayList(list);
            promptUser();
        }
        else if (response.toLowerCase() === 'edit') {
            questionPrompt.question('What item would you like to edit? ', function (name) {
                var index = list.findIndex(function (item) { return item.name.toLowerCase() === name.toLowerCase(); });
                if (index !== -1) {
                    questionPrompt.question('What is the new price? ', function (price) {
                        list[index].price = parseFloat(price);
                        displayList(list);
                        promptUser();
                    });
                }
                else {
                    displayList(list);
                    promptUser();
                }
            });
        }
        else if (response.toLowerCase() === 'exit') {
            questionPrompt.close();
        }
        else {
            promptUser();
        }
    });
};
displayList(list);
promptUser();

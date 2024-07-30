import { Item } from './item';
import * as readline from 'readline';

const displayList = (list: Item[]) => {
  if (list.length === 0) {
    console.log('No items in list');
  } else {
    list.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name}, $${item.price}`);
    });
  }
};

const questionPrompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const list: Item[] = [];

const promptUser = () => {
  questionPrompt.question('What would you like to do? Add/View/Edit/Delete/Exit: ', (response) => {
    if (response.toLowerCase() === 'add') {
      questionPrompt.question('What item would you like to add? ', (name) => {
        questionPrompt.question('What is the price of the item? ', (price) => {
          const item = new Item(name, parseFloat(price));
          list.push(item);
          displayList(list);
          promptUser();
        });
      });
    } else if (response.toLowerCase() === 'delete') {
      questionPrompt.question('What item would you like to delete? ', (name) => {
        const index = list.findIndex((item) => item.name === name);
        if (index !== -1) {
          list.splice(index, 1);
        }
        displayList(list);
        promptUser();
      });
    } else if (response.toLowerCase() === 'view') {
      displayList(list);
      promptUser();
    } else if (response.toLowerCase() === 'edit') {
      questionPrompt.question('What item would you like to edit? ', (name) => {
        const index = list.findIndex((item) => item.name.toLowerCase() === name.toLowerCase());
        if (index !== -1) {
          questionPrompt.question('What is the new price? ', (price) => {
            list[index].price = parseFloat(price);
            displayList(list);
            promptUser();
          });
        } else {
          displayList(list);
          promptUser();
        }
      });
    } else if (response.toLowerCase() === 'exit') {
      questionPrompt.close();
    } else {
      promptUser();
    }
  });
};

displayList(list);
promptUser();

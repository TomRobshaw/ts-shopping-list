export class Item {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Price: ${this.price}`);
  }
}

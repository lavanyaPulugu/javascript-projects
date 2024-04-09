// In JavaScript, the class keyword was introduced in ECMAScript 2015 (ES6) to provide a more familiar syntax for defining object-oriented programming structures. Despite its appearance, JavaScript classes are primarily a syntactical sugar over JavaScript's existing prototype-based inheritance.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`product: ${this.name}`);
    console.log(`price: ${this.price.toFixed(2)}`);
  }
  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Product("dress", 500.5);
const product2 = new Product("saree", 1500.5);

product1.displayProduct();
product2.displayProduct();

const total = product1.calculateTotal(salesTax);

console.log(`total price (with salesTax): ${total.toFixed(2)}`);

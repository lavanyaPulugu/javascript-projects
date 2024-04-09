// In JavaScript, you likely meant to refer to the "constructor" function, which is a special method used for initializing objects created with a class or a constructor function.

function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color),
    (this.drive = () => {
      console.log(`you drive the ${this.model}`);
    });
}

const car1 = new Car("ford", "mustang", 2024, "red");
const car2 = new Car("tata", "recent", 2023, "white");
const car3 = new Car("dodge", "new", 2020, "black");

console.log(car2.model);
console.log(car1.model);
console.log(car2.make);
console.log(car1.model);
console.log(car2.color);
console.log(car2.year);

car1.drive();

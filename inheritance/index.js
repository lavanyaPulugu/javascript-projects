// In JavaScript, inheritance can be implemented using prototypes and constructor functions. While JavaScript doesn't have classical inheritance like some other languages (e.g., Java or C++), it does have prototypal inheritance.

class animal {
  alive = true;
  eat() {
    console.log(`this ${this.name} is eating`);
  }
  sleep() {
    console.log(`this ${this.name} is sleeping`);
  }
}

class Rabbit extends animal {
  name = "rabbit";
  run() {
    console.log(`this ${this.name} is running`);
  }
}

class Dog extends animal {
  name = "dog";
  bark() {
    console.log(`this ${this.name} is barking`);
  }
}
class Puppy extends animal {
  name = "puppy";
  dance() {
    console.log(`this ${this.name} is dancing`);
  }
}

const rabbit = new Rabbit();
const puppy = new Puppy();
const dog = new Dog();

console.log(rabbit.alive);
rabbit.eat();
puppy.eat();
dog.eat();
puppy.sleep();
dog.sleep();
rabbit.sleep();
rabbit.run();

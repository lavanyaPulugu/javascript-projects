// In JavaScript, the super keyword is used within classes to call methods and access properties from the parent class (also known as the superclass or base class). It's particularly useful when you're extending a class and want to access or override methods or properties defined in the parent class.

class animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`the ${this.name} moves at a speed of ${speed}mph`);
  }
}

class Rabbit extends animal {
  constructor(name, age, runspeed) {
    super(name, age);
    this.runspeed = runspeed;
  }
  run() {
    console.log(`the ${this.name} can run`);
    super.move(this.runspeed);
  }
}

class Fish extends animal {
  constructor(name, age, swimspeed) {
    super(name, age);
    this.swimspeed = swimspeed;
  }
  swim() {
    console.log(`the ${this.name} can swim`);
    super.move(this.swimspeed);
  }
}
class Bird extends animal {
  constructor(name, age, flyspeed) {
    super(name, age);
    this.flyspeed = flyspeed;
  }
  fly() {
    console.log(`the ${this.name} can fly`);
    super.move(this.flyspeed);
  }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 50);
const bird = new Bird("bird", 1, 30);

// console.log(rabbit.name);
// console.log(rabbit.runspeed);
// console.log(fish.age);
// console.log(bird.name);
// console.log(bird.flyspeed);

rabbit.run();

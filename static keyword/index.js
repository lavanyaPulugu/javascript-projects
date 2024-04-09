// In JavaScript, the static keyword is used to define a static method or property for a class. Static methods or properties are attached to the class itself rather than to instances of the class. This means that they can be accessed directly on the class without the need to create an instance of the class.

class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getcircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);

console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getArea(10));

console.log(MathUtil.getcircumference(10));

//another example

class User {
  static userCount = 0;
  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`there are ${User.userCount} users are online`);
  }

  sayhello() {
    console.log(`hello my username is ${this.username}`);
  }
}

const user1 = new User("lavanya");
const user2 = new User("rahul");
console.log(user1.username);
console.log(User.userCount);

user1.sayhello();

user2.sayhello();
User.getUserCount();

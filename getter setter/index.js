// In JavaScript, getter and setter methods allow you to define custom behavior for accessing and modifying object properties. They are a way to encapsulate access to object properties and can be particularly useful for data validation or implementing computed properties.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.log("width must be a positive number");
    }
  }
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.log("height must be a positive number");
    }
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
}

const rectangle = new Rectangle(3, 4);

rectangle.height = 5;
rectangle.width = 6;

console.log(rectangle.height);
console.log(rectangle.width);

// another example

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.log("first name must be non empty string");
    }
  }
  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.log("last name must be non empty string");
    }
  }
  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
      console.log("last name must be non empty number");
    }
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return this._firstName + " " + this._lastName;
  }
  get age() {
    return this._age;
  }
}

const person = new Person("hello", "bolo", 5);
console.log(person.fullName, person.age);

// ES6 introduced a new way to organize and structure JavaScript code through modules. ES6 modules provide a mechanism for encapsulating code into reusable units, making it easier to manage dependencies and maintainability.

import { PI, getArea, getDiameter, getcircumference } from "./mathUtil.js";

console.log(PI);

const circumference = getcircumference(10);

const area = getArea(15);
console.log(`the circumference is ${circumference}cm`);

console.log(`the circumference is ${area}cm*2`);

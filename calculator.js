// using the import/export keywords from ES6 allows you to get the following benefits:
// 1. Helps modularize / organize your code - you are now able to contain a series of
//    relevant/associated callback functions within their very own file and you can call
//    them individually / in as many number as you need based on your use case in other files of
//    your project
// 2. Adds a layer of abstraction to your code and therefore improves readability. Meaning,
//    if you document your modules appropriately / name your functions appropriately, people working
//    within your codebase don't need to understand or even read your code to make use of it. Saves
//    time and space 
import { multiply, subtract, add, divide } from "./math.js";


console.log(multiply)
console.log(add)

console.log(divide(12, 3))
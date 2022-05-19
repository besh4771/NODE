// console.log(arguments);
// console.log(require("module").wrapper);


const C = require('./test-module1')
const Calc1 = new C();
console.log(Calc1.add(2, 5));


// exports
// const calc2 = require('./test-module2');
const { add, multiply, divide } = require('./test-module2');
console.log(divide(2, 5))


// Caching
require('./test-module3')();
require('./test-module3')();
require('./test-module3')();
require('./test-module3')();
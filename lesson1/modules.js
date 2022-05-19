// console.log(arguments);
// console.log(require("module").wrapper);


const C = require('./test-module1')
const Calc1 = new C();
console.log(Calc1.add(2, 5));
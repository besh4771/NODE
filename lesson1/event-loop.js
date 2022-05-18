const fs = require("fs");

setTimeout(()=> console.log("Timer 1 is finished"), 0);
setImmediate(()=> console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
    console.log("I/O finished");
    console.log("-----------------");

    setTimeout(()=> console.log("Timer 2 finished"), 0);
    setTimeout(() => console.log("Timer 3 f"))
})
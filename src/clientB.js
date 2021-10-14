const { getCount, increment } = require("./module");

console.log(`clientB gets state before increment: ${getCount()}`);
increment();
console.log(`clientB gets state after increment: ${getCount()}`);

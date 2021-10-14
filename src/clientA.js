const { getCount, increment } = require("./module");

console.log(`clientA gets state before increment: ${getCount()}`);
increment();
console.log(`clientA gets state after increment: ${getCount()}`);

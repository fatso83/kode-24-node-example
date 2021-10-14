const {getCount, increment } = require("./module");

console.log(`index gets the count before anyone: ${getCount()}`);
require("./clientA");
require("./clientB");

console.log("Index starts incrementing");
increment();
increment();
increment();
console.log(`index gets the count: ${getCount()}`);

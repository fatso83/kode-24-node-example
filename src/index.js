require("./clientA");
require("./clientB");

console.log(`index gets the state: ${require("./module").getCount()}`);

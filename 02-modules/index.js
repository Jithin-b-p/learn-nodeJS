// CommonJS every files are modules by refault.
// Modules - encapsulate code (code splitting)
const { name1, name2 } = require("./names");
const sayHi = require("./utils");

// simply importing a module actually invokes it.
require("./sample");

// console.log(name1, name2);

sayHi(name1);
sayHi(name2);

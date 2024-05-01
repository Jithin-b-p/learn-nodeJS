const path = require("path");

// seperator
console.log(path.sep);

const filePath = path.join("/content", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "text.txt");
console.log(absolute);

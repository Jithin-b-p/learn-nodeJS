const { readFileSync, writeFileSync, writeFile, readFile } = require("fs");
/*
==============================
File system sync
==============================
*/

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(second);

writeFileSync(
  "./content/result-write.txt",
  `This is the result: ${first}, ${second}.`
);

/*
==============================
File system async
==============================
*/

// As the code getting bigger this way of approach can cause callback hell.

readFile("./content/first.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }

  const first = result;

  readFile("./content/second.txt", "utf-8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }

    const second = result;

    writeFile(
      "./content/result-async-write.txt",
      `This is the result of async: ${first}, ${second}.`,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(result);
      }
    );
  });
});

const { readFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);

// const getFile = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// old setup for resolving promises
// getFile("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(error));

// modern setup
// const start = async () => {
//   try {
//     const first = await getFile("./content/first.txt");
//     const second = await getFile("./content/second.txt");
//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// };
const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf-8");
    const second = await readFilePromise("./content/second.txt", "utf-8");
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();

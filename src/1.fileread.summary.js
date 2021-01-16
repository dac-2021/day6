const fs = require("fs");
const Promise = require("bluebird");

// Promisificatoin :: Convert the Callback aware Method into Promise aware Method
Promise.promisifyAll(fs);

function myreadFileSync() {
  const filePath = "/Users/research/Desktop/day6/package.json";

  const output = fs.readFileSync(filePath, { encoding: "utf-8" });

  return output;
}

function myreadFileCallback() {
  const filePath = "/Users/research/Desktop/day6/package.json";

  // Callback Aware
  // callback is used to achieve aschronous;
  // async / await / Promise was not available
  // It is difficult to return output from callback
  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    console.log(err);
    console.log(data);

    return data;
  });
}

async function myreadfilePromisify() {
  const filePath = "/Users/research/Desktop/day6/package.json";

  // Promise Aware Method
  // because of promisification
  const output = await fs.readFileAsync(filePath, { encoding: "utf-8" });

  return output;
}

module.exports = {
  myreadFileSync: myreadFileSync,
  myreadFileCallback: myreadFileCallback,
  myreadfilePromisify: myreadfilePromisify,
};

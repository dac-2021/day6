const myio = require("./1.fileread.summary");
const mydac = require("./dac/2.local.mod");

async function main() {
  // From myio
  const output = myio.myreadFileSync();
  console.log("Sync", output);

  const output1 = myio.myreadFileCallback();
  console.log("Callback", output1);

  const output2 = await myio.myreadfilePromisify();
  console.log("promise", output2);

  // From mydac
  console.log("MYDAC", mydac);
  console.log("MYDAC...", mydac.PI, mydac.AJAX_URL);

  const asum = mydac.add(10, 20);
  console.log("Sum", asum);

  const adiff = mydac.subtraction(20, 10);
  console.log("DIFF", adiff);
}

main();

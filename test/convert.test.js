const fs = require("fs");

let expectedXMLfile = fs.readFileSync("txtTest.xml", "utf8");
let convertedXMLfile = fs.readFileSync("convertTxt.xml", "utf8");

describe("Assert file contains expected data", () => {
  test("Expect converted data to be same as data", () => {
    expect(convertedXMLfile).toBe(expectedXMLfile);
  });
});

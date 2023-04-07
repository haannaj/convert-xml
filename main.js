import * as fs from "fs";
import convertModel from "./convertModel.js";

fs.readFile("./example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let jsonObj = convertModel.convertTojsonObj(data);
  let xml = convertModel.convertToXML(jsonObj);

  fs.writeFile("convertTxt.xml", xml, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("convertTxt.xml", "utf8"));
    }
  });
});

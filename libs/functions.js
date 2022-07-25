import fs from "fs/promises";
import convert from "xml-js";
import { osData, networkInterfaces } from "../features.js";

function operatingSystem(option, output) {
  outputFormat(option, output, osData);
}
function network(option, output) {
  outputFormat(option, output, networkInterfaces);
}

async function writeFile(prefix, data, extension) {
    const jsonOrXml = extension === "json" ? JSON.stringify(data) : data
    try {
      await fs.writeFile(`${process.cwd()}/${prefix}-${Date.now()}.${extension}`, jsonOrXml);
    } catch (error) {
      console.error(error);
    }
  }
  
  async function outputFormat(option, output, data) {
    const prefix = option === "1" ? "os" : "network";
    if (output === "output-json") {
      writeFile(prefix, data, "json");
    } else if (output === "output-xml") {
      const xmlOptions = { compact: true, ignoreComment: true, spaces: 4 };
      const xmlResult = convert.js2xml(data, xmlOptions);
      writeFile(prefix, xmlResult, "xml");
    } else {
      console.log(data);
    }
  }

  export {operatingSystem, network}
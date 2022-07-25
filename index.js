import { network, operatingSystem } from "./libs/functions.js";
import { menu } from "./menu.js";





function main() {
  const argv = process.argv.slice(2);
  if (argv.length >= 0) {
    if (argv[0] === "--help" || argv[0] === "-h" || !!argv[0] === false) {
      console.log(menu)
      return menu;
    } else if (argv[0] === "1" && argv[1] === "output-json") {
      operatingSystem(argv[0], argv[1]);
    } else if (argv[0] === "1" && argv[1] === "output-xml") {
      operatingSystem(argv[0], argv[1]);
    } else if (argv[0] === "1") {
      operatingSystem(argv[0], argv[1]);
    } else if (argv[0] === "2" && argv[1] === "output-json") {
      network(argv[0], argv[1]);
    } else if (argv[0] === "2" && argv[1] === "output-xml") {
      network(argv[0], argv[1]);
    } else if (argv[0] === "2") {
      network(argv[0], argv[1]);
    } else {
      console.error("Unknow option");
      console.log(menu);
      process.exit(1);
    }
  }
}
main();
export { main };

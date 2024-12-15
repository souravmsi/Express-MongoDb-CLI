import { Command } from "commander";
import generateMvc from "./actions/generate-mvc.js";
// import generateSchemantic from "./actions/generate-schemantic.js";
import figlet from "figlet";
import chalk from "chalk";

console.log(
  chalk.blue(
    figlet.textSync("SOURAV'S-CLI-TOOL", {
      font: "doom",
      horizontalLayout: "default",
      verticalLayout: "default",
    })
  )
);

const program = new Command();

program
  .version("1.0.0")
  .description("A CLI Tool to generate MVC boilerplate code.");

program
  .command("sourav-generate-mvc")
  .description("Clone an MVC code and initialize git")
  .action(generateMvc);

// program
//   .command("sourav-generate <schemanticName>")
//   .description(
//     "Generate different schemantic such as controller, route, middleware and services"
//   )
//   .action(generateSchemantic);

program.parse(process.argv);

const exitHandler = () => {
  process.exit(1);
};

process.on("uncaughtException", exitHandler);
process.on("unhandledRejection", exitHandler);

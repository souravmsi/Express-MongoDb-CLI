import { promptInput } from "../utils/prompt.js";
import { REPO_URL } from "../config/config.js";
import { clone } from "../utils/git.js";
import fs from "fs";
import path from "path";
import chalk from "chalk";
import { generateEnvContent } from "../utils/content.js";
import { generateFile } from "../utils/file.js";
import { runCommand } from "../utils/runner.js";

const generateMvc = async () => {
  const answer = await promptInput([
    {
      name: "projectName",
      message: "what is the project name?",
      type: "input",
    },
  ]);
  const projectPath = path.join(process.cwd(), answer.projectName);
  if (fs.existsSync(projectPath)) {
    console.log(chalk.red(`${answer.projectName} already exists`));
    return;
  }
  try {
    // clonning from git...
    await clone(REPO_URL, answer.projectName);

    // installing dependencies...
    const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
    await runCommand(npmCommand, ["install"], { cwd: projectPath });

    // generating .env file
    await generateFile(path.join(projectPath, ".env"), generateEnvContent());
  } catch (error) {
    console.log("something went wrong");
  }
};

export default generateMvc;

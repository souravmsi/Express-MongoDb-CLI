import fs from "fs";
import path from "path";
import ora from "ora";

export const generateFile = async (filePath, content) => {
  const basename = path.basename(filePath);
  let spinner = ora(`Generating ${basename} file...`).start();
  try {
    await fs.promises.writeFile(filePath, content);
    spinner.succeed(`${basename} file generated successfully!`);
  } catch (error) {
    spinner.fail("something went wrong!");
    throw error;
  }
};

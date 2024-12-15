import simpleGit from "simple-git";
import ora from "ora";

export const clone = async (repoUrl, projectName) => {
  let spinner = ora("creating your project...").start();
  try {
    const git = simpleGit();
    await git.clone(repoUrl, projectName);
    spinner.succeed("project created successfully!");
  } catch (error) {
    spinner.fail("something went wrong!");
    throw error;
  }
};

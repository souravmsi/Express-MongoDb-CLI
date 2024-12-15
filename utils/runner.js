import { spawn } from "child_process";
import ora from "ora";

export const runCommand = async (command, args, options) => {
  return new Promise((resolve, reject) => {
    let spinner = ora(`Running ${command} ${args.join(" ")}...`).start();
    try {
      const child = spawn(command, args, { ...options });
      child.on("close", (code) => {
        if (code === 0) {
          spinner.succeed(
            `${command} ${args.join(" ")} successfully completed!`
          );
          resolve();
        } else {
          reject(new Error("something went wrong!"));
        }
      });
      child.on("error", (err) => {
        spinner.fail("something went wrong!");
        reject(err);
      });
    } catch (error) {
      spinner.fail("something went wrong!");
      throw error;
    }
  });
};

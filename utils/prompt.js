import inquirer from "inquirer";

export const promptInput = async (questions) => {
  const prompt = inquirer.createPromptModule();
  return await prompt(questions);
};

import { projectConfig } from "../config/config.js";

export const generateEnvContent = (projectName) => {
  return `DB_CONNECTION=${projectConfig.CONNECTION_STRING}/${projectName}\nPORT=${projectConfig.PORT}`;
};

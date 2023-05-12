import { writeFile, mkdir, appendFile } from "fs/promises";

export const myFunction = async () => {
  try {
    await mkdir("logs");
  } catch (error) {
    console.error(error);
  }

  try {
    await writeFile("./logs/log.txt", "my new text");
  } catch (error) {
    console.error(error);
  }

  try {
    await writeFile("./log/log.txt", new Date().toUTCString());
  } catch (error) {
    console.error(error);
  }
};
myFunction();

export const myErrorFunction = async (message) => {
  try {
    await appendFile("./logs/error.js", message + "\n");
  } catch (error) {
    console.error(error);
  }
};

export const myInfoFunction = async (message) => {
  try {
    await appendFile("./logs/info.js", message + "\n");
  } catch (error) {
    console.error(error);
  }
};

export const myWarnFunction = async (message) => {
    try {
      await appendFile("./logs/warn.js", message + "\n");
    } catch (error) {
      console.error(error);
    }
  };
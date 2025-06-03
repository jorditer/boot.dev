
import { CLICommand, initState } from "./state.js";
import { createInterface, type Interface } from "node:readline";

const [rl, getCommands] = initState();

export function startREPL() {
  rl.prompt();

  rl.on("line", (line) => {
    const input = line.trim();
    const cleanedInput = cleanInput(input);
    const commands = getCommands();
    if (cleanedInput[0] in commands) {
      // rl.close();
      commands[cleanedInput[0]].callback(commands);
      // commandExit();
      return;
    } else if (input === "") {
      rl.prompt();
      return;
    } else {
      console.log("Unknown command");
    }
    // console.log(`Your command was: ${cleanedInput[0]}`);
    rl.prompt();
  }).on("close", () => {
    console.log("REPL closed.");
  });
}

export function cleanInput(input: string): string[] {
  // console.log(input.trim().split(/\s+/));
  return input.trim().toLowerCase().split(/\s+/);
}

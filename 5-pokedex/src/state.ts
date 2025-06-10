import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { Interface, createInterface } from "readline";
import { stdin, stdout } from "node:process";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};
export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  api?: PokeAPI;

};

export function initState(): State {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "> ",
  });
  const commands: Record<string, CLICommand> = {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    // Add more
  };
  return { rl, commands };
}

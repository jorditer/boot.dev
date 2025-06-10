import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { createInterface } from "readline";
import { stdin, stdout } from "node:process";
export function initState() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "> ",
    });
    const commands = {
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

import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "> ",
});
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        }
        // Add more
    };
}
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
        }
        else if (input === "") {
            rl.prompt();
            return;
        }
        else {
            console.log("Unknown command");
        }
        // console.log(`Your command was: ${cleanedInput[0]}`);
        rl.prompt();
    }).on("close", () => {
        console.log("REPL closed.");
    });
}
export function cleanInput(input) {
    // console.log(input.trim().split(/\s+/));
    return input.trim().toLowerCase().split(/\s+/);
}

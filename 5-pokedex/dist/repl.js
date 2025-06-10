import { initState } from "./state.js";
const state = initState();
export function startREPL() {
    state.rl.prompt();
    // TODO fix so that state.rl.prompt is DRY
    state.rl
        .on("line", (line) => {
        const input = line.trim();
        const cleanedInput = cleanInput(input);
        // const commands = getCommands();
        if (cleanedInput.length > 0 && cleanedInput[0] in state.commands) {
            state.commands[cleanedInput[0]].callback(state);
            if (cleanedInput[0] !== "exit") {
                state.rl.prompt();
            }
        }
        else {
            if (input !== "") {
                console.log("Unknown command");
            }
            state.rl.prompt();
        }
        // console.log(`Your command was: ${cleanedInput[0]}`);
    })
        .on("close", () => {
        console.log("REPL closed.");
    });
}
export function cleanInput(input) {
    // console.log(input.trim().split(/\s+/));
    return input.trim().toLowerCase().split(/\s+/);
}

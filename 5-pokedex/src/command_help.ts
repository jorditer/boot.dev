import { CLICommand } from './state.js';

export function commandHelp(commands: Record<string, CLICommand>): void {
	console.log("Welcome to the Pokedex!\nUsage:\n");
	for (const commandName in commands) {
		const command = commands[commandName];
		console.log(`${command.name}: ${command.description}`);
	}
}

import * as vscode from 'vscode';

async function search () {
	const searchWord = await vscode.window.showInputBox({
		prompt: "Please input search words",
		validateInput: (input) => {
				return '';
		}
	});

	if (!searchWord) {
		return;
	}

	const words = searchWord.split(" ");
	let url = "https://www.google.com/search?q=" + encodeURI(words[0]);
	words.slice(1).forEach((word) => {
		url = url + "+" + encodeURI(word);
	});

	vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(url));
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('skz-0614.google.search', search));
	vscode.commands.executeCommand('setContext', 'SearchEnabled', true);
}

export function deactivate() {}

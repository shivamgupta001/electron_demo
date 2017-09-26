const electron = require('electron');
const { app, BrowserWindow } = electron;

app.on('ready', () => {
	console.log("Electron application is running");
	const mainWindow = new BrowserWindow({});
	mainWindow.loadURL(`file://${__dirname}/index.html`);
});
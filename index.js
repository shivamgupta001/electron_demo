const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');
const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', () => {
	console.log("Electron application is running");
	const mainWindow = new BrowserWindow({});
	mainWindow.loadURL(`file://${__dirname}/index.html`);
	
});

ipcMain.on('video:submit', (event , path) => {
	ffmpeg.ffprobe(path , (err, metadata) => {
		console.log(metadata);
	})
});
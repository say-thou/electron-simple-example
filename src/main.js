const path = require("path");
const {app, BrowserWindow} = require("electron");

// アプリ画面をガベージコレクションされないように、あらかじめ変数定義
let mainWindow;

// 起動時動作
const createWindow = () => {
	mainWindow = new BrowserWindow({width: 800, height: 600});
	mainWindow.openDevTools();
	mainWindow.loadURL(path.resolve(__dirname, "index.html"));
	mainWindow.on('closed', () => { mainWindow = null; });
};

// 起動
app.on('ready', createWindow);
app.on('activate', () => {
	// 画面は閉じられていたが、アプリが生きていた場合の二重起動対策
	if (mainWindow === null) createWindow();
});
// 終了
app.on('window-all-closed', () => {
	// Macの場合、画面を閉じただけではアプリが終了していないので
	if (process.platform !== 'darwin') app.quit();
});

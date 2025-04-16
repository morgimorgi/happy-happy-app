const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'appleofmyeye',
        icon: 'assets/appleicon.png',
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadFile('index.html');

    const startUrl = url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',

    });

    mainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);

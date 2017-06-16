// grab everything we need
const { app, BrowserWindow } = require('electron');
const path = require('path');

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', './bin', 'electron')
});

// get a global reference for the window
let win;

// start creating the main browser window
function createWindow() {
  // set default options for our window
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    frame: false
  });

  win.loadURL('http://localhost:4200'); // open the site
  win.webContents.openDevTools(); // open dev tools

  // cleanup to close browser
  win.on('closed', () => win = null);
}

// load the app
app.on('ready', createWindow);

// mac specific
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// mac specific to reopen a window if app still running
app.on('activate', () => {
  if (win === null) createWindow();
});

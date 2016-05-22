const { app, BrowserWindow, crashReporter } = require('electron');
const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 800, heitht: 600 });
  mainWindow.loadURL(`file://${ __dirname }/../../index.html`);
  // mainWindow.openDevTools();
  mainWindow.on('closed', () => { mainWindow = null; });
};

let mainWindow = null;
app.on('window-all-closed', () => { process.platform == 'darwin' && app.quit(); });
app.on('ready', createWindow);
app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

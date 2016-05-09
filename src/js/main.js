let app = require('app');
let BrowserWindow = require('browser-window');

let cr = require('crash-reporter');
cr.start({
  productName: 'electron_mockup',
  companyName: 'electron_mockup'
});

let mainWindow = null;

app.on('window-all-closed', () => { process.platform == 'darwin' && app.quit(); });

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, heitht: 600 });
  mainWindow.loadURL(`file://${ __dirname }/../../index.html`);
  // mainWindow.openDevTools();
  mainWindow.on('closed', () => { mainWindow = null; });
});

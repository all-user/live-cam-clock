import { app, BrowserWindow, crashReporter } from 'electron';
import os from 'os';
import path from 'path';
import fs from 'fs';
const DEVELOPMENT = process.env.NODE_ENV !== 'production';

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

function createWindow() {
  if (DEVELOPMENT) {
    loadReactDevTools();
  }
  mainWindow = new BrowserWindow({ width: 800, heitht: 600 });
  mainWindow.loadURL(`file://${ __dirname }/../index.html`);
  if (DEVELOPMENT) {
    mainWindow.openDevTools();
  }
  mainWindow.on('closed', () => { mainWindow = null; });
}

function loadReactDevTools() {
  const id = 'fmkadmapgofadopljbjfkapdkoienihi';
  const extdir = path.resolve(os.homedir(),'Library/Application Support/Google/Chrome/Default/Extensions');
  const versions = fs.readdirSync(`${ extdir }/${ id }`).sort();
  const version = versions.pop();
  BrowserWindow.addDevToolsExtension(`${ extdir }/${ id }/${ version }`);
}

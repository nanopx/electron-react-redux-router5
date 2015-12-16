import electron from 'electron';
import server from './webpack.server';
import electronDebug from 'electron-debug';
const app = electron.app;  // Module to control application life.

// open devtools
electronDebug({
  showDevTools: true,
});

const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
console.info('==> Booting the app...'); // eslint-disable-line no-console

// Report crashes to our server.
electron.crashReporter.start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function setApplicationMenu() {
  const Menu = require('menu');
  const menu = Menu.buildFromTemplate([
    {
      label: 'Application',
      submenu: [
        {label: 'About Application', selector: 'orderFrontStandardAboutPanel:'},
        {type: 'separator'},
        {label: 'Quit', accelerator: 'Command+Q', click: () => app.quit()},
      ],
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click: (item, focusedWindow) => {
            if (focusedWindow) {
              focusedWindow.reload();
            }
          },
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'Command+Z', selector: 'undo:' },
        { label: 'Redo', accelerator: 'Shift+Command+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'Command+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'Command+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'Command+V', selector: 'paste:' },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', () => {
  console.info('==> ✅  App ready'); // eslint-disable-line no-console
  console.info('==> Initializing development server...'); // eslint-disable-line no-console
  server.listen(3000, 'localhost', () => {
    console.info('==> ✅  Initialized development server'); // eslint-disable-line no-console
    console.info('==> 🌎  For development in browsers, see: http://localhost:3000'); // eslint-disable-line no-console

    // Create the browser window.
    mainWindow = new BrowserWindow({ width: 1024, height: 728 });

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/static/index.hmr.html`);

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
      server.close();
    });

    setApplicationMenu();
  });
});

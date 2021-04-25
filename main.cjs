const { app, BrowserWindow } = require('electron')
const { spawn } = require('child_process')
const serve = require("electron-serve");
try { require("electron-reloader")(module); } catch {}

const loadURL = serve({directory: "."});
const port = process.env.PORT || 8080;
const isdev = !app.isPackaged || (process.env.NODE_ENV == "development");

let mainWindow;
let apiProcess;
const apiPath = __dirname.substring(0, __dirname.length - 3) + 'api\\Api.exe'

function loadVite(port) {
    mainWindow.loadURL(`http://127.0.0.1:${port}`).catch((err) => {
        setTimeout(() => { loadVite(port); }, 200);
    });
}

function createMainWindow() 
{
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 640,
        webPreferences: {
            devTools: isdev
        }
    });

    mainWindow.removeMenu();
    mainWindow.maximize();

    if(isdev) 
    {
        mainWindow.webContents.openDevTools();
        loadVite(port);
    }

    if(!isdev)
    {
        apiProcess = spawn(apiPath)
        loadURL(mainWindow);
    }
}

app.once("ready", createMainWindow);

app.on('window-all-closed', () => {
    try { apiProcess.kill() } catch {}
    app.quit()
})
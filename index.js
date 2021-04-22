const { app, BrowserWindow } = require('electron')
const { spawn } = require('child_process');
const { fs } = require('fs');
const apiExec = __dirname.substring(0, __dirname.length - 3) + 'api\\Api.exe'
const apiProcess = spawn(apiExec)

app.whenReady().then(() => 
{
    const win = new BrowserWindow({ width: 800, height: 600 })
    win.setMenu(null)
    win.loadFile('index.html')

    apiProcess.on('error', (er) => { 
        fs.writeFileSync('log.txt', er.message)
    })

    app.on('activate', () => 
    {
        if (BrowserWindow.getAllWindows().length === 0) 
        {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
    {
        apiProcess.kill()
        app.quit()
    }
})

const { app, BrowserWindow } = require('electron')

module.exports = {
    start: createWindow
}

function createWindow() {
    const win = new BrowserWindow({
        "minWidth": 1000,
        "minHeight": 600,
        webPreferences: {
            nodeIntegration: true
        },
        icon: __dirname + "\\..\\frountend\\resources\\images\\logo_small.png"
    })

    console.log(__dirname + "\\..\\frountend\\resources\\images\\logo_small.png");

    //win.removeMenu();

    win.loadFile('./frountend/html/ApplicationInformation.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
import { app, BrowserWindow } from "electron";

export default class WindowManager {
    public constructor() {
        app.on("ready", this.createWindow);
    }

    private createWindow():void {
        // Create the browser window.
        let win: BrowserWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            }
        });
      
        // and load the index.html of the app.
        win.loadFile('index.html');
    }
}
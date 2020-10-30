import {BrowserWindow, app} from 'electron';
import moment, {duration} from 'moment';

let win: BrowserWindow;

async function createWindow() {
    let startTime = moment();
    console.log("[CreateWindow] Creating...");

    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    console.log("[CreateWindow] Loading file...");

    await win.loadFile("../../webContents/index.html")

    console.log(`[CreateWindow] Done in ${duration(moment().diff(startTime)).asMilliseconds()}ms`);
}

app.on("ready", async () => {
    await createWindow();
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", async () => {
    if (win === null) {
        await createWindow();
    }
});

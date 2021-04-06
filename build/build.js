const fs = require("fs-extra");
const asar = require("asar");
const rcedit = require('rcedit');
const ws = require("windows-shortcuts");

async function run() {
    fs.copySync(__dirname + "\\..\\app\\node_modules\\electron\\dist", "./out/app");
    console.log("done!")

    await fs.rename("./out/app/electron.exe", "./out/app/MinecraftMapGUI.exe");
    await fs.rename("./out/app/LICENSE", "./out/app/ELECTRON_LICENSE");
    await fs.copySync("../LICENSE", "./out/LICENSE");
    await asar.createPackage(__dirname + "\\..\\app", "./out/app/resources/default_app.asar");
    await rcedit("./out/app/MinecraftMapGUI.exe", {
        icon: __dirname + "\\..\\app\\resources\\logo_small.ico"
    })
    ws.create(__dirname + "\\out", __dirname + "\\out\\app\\MinecraftMapGUI.exe");
}
run();
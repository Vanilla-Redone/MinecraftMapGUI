import { PathLike } from "node:fs";
import { useCallback } from "react";
import { version } from "../devTypes";
import ActiveServer from "./ActiveServer"
import CustomError from "../CustomError"
import WorldMap from "../WorldMap";

class ServerAlreadyActiveError extends CustomError {}
class ServerNotActiveError extends CustomError {}


export default class Server {
    private activeServer: ActiveServer
    private name: string;
    private version: version;
    private serverSettings: serverSettings;
    private serverPath: PathLike

    public static createFromFile(serverFile: PathLike): Server {
        return null;
    }

    public constructor(name: string, version: version, serverSettings: serverSettings) {
        this.name = name;
        this.version = version;
        this.serverSettings = serverSettings;
    }

    public startServer(map: WorldMap) {
        
    }

    public activate(): ActiveServer {
        if (this.activeServer) {
            throw new ServerAlreadyActiveError()
        }

        this.activeServer = new ActiveServer(this);

        return this.activeServer;
    }

    public async stop(): Promise<Server> {
        return new Promise(async (resolve, reject) => {
            if (!this.activeServer) {
                reject(new ServerNotActiveError());
            }

            this.activeServer.shutdown().then(() => {
                resolve(this);
            })
        })
    }
}

export interface ServerProperties {
    [x: string]: any
}

interface serverSettings {
    mode: "vanilla" | "spigot" | "paper",
    serverProperties: ServerProperties
}

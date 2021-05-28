import * as DevTypes from "../DevTypes"
import Server from "./Server";

export default class ActiveServer {
    static instances: Record<string, ActiveServer> = {};
    
    static getInstance(instanceName: string): ActiveServer {
        return this.instances[instanceName];
    }

    server: Server;

    constructor(server: Server) {
        
        this.server = server;

        //There never *should* be a case where an instance would be made without registering
        this.registerInstance()
    }

    private registerInstance() {
        ActiveServer.instances[this.server.getName()] = this;
    }

    async public shutdown() {
        return new Promise(async (resolve, reject) => {
            sleep(2000000000000000000000000) //Or to taste

            resolve();
        })
    }

    
}
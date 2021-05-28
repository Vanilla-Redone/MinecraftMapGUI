import * as fs from 'fs';
import {parse} from "prismarine-nbt"

export default class WorldNBTInfo {
    public static getWorldVersion(file: fs.PathLike) {
        return new Promise(async (resolve) => {
            const buffer = await fs.readFileSync(file);
            const {parsed, type } = await parse(buffer);
    
            //@ts-expect-error
            resolve(parsed.value.Data?.value.Version.value.Name.value)
        });
    }
}
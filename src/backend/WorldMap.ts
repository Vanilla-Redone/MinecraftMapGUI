import {version} from "./devTypes"
import * as fs from "fs"

interface WorldMetadata {
    version: version
    rootPath: fs.PathLike
}


export default class WorldMap {
    data: WorldMetadata
}
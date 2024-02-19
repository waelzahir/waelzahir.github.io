import { file, filetype, icon, state } from "../types/ProgramType";

const statedef :state = {
    opened:false,
    height:0,
    width:0,
    x:0,
    y:0
}
export const Desktop: file [] = [
    {
        icon: icon.Folder,
        windowState:statedef,
        visibilityindex: -1,
        name: "Projects",
        type: filetype.Folder,
        description: "Project i worked on",
        content: new Array<file>()
    }
    ,
    {
        icon: icon.Folder,
        windowState:statedef,
        visibilityindex: -1,
        name: "tools",
        type: filetype.Folder,
        description: "tool you can run",
        content: new Array<file>()

    }
    ,
    {
        icon: icon.Internet,
        windowState:statedef,
        visibilityindex: -1,
        name: "Internet",
        type: filetype.Exec,
        description: "Surf the web",
        content: null
    }
]
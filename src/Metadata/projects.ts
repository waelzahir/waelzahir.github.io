import { file, filetype, icon, state } from "../types/ProgramType";

export const statedef :state = {
    opened:false,
    top: 0,
    left: 0,
    bottom:0,
    right:0,
}
export const Desktop: file [] = [
    {
        id:1,
        parent:0,
        level: 0,

        icon: icon.Folder,
        windowState:{
            opened:false,
            top: 10,
            left: 10,
            bottom:0,
            right:0,
        },
        name: "Projects",
        type: filetype.Folder,
        description: "Project i worked on",
        content: new Array<file>()
    }
    ,
    {
        id:2,
        parent:0,
        level: 0,

        icon: icon.Folder,
        windowState:{
            opened:false,
            top: 110,
            left: 10,
            bottom:0,
            right:0,
        },
        name: "tools",
        type: filetype.Folder,
        description: "tool you can run",
        content: new Array<file>()

    }
    ,
    {
        id:3,
        parent:0,
        level: 0,

        icon: icon.Internet,
        windowState:{
            opened:false,
            top: 220,
            left: 10,
            bottom:0,
            right:0,
        },
        name: "Internet",
        type: filetype.Exec,
        description: "Surf the web",
        content: null
    }
    ,
    {
        id:-1,
        level: 0,
        parent:0,
        icon: icon.Trash,
        windowState:{
            opened:false,
            top: 330,
            left: 10,
            bottom:0,
            right:0,
        },
        name: "Trash",
        type: filetype.Trash,
        description: "Trashcan",
        content: new Array<file>()
    }
]
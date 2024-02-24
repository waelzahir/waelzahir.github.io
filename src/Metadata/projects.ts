import { file, filetype, icon, state } from "../types/ProgramType";

export const statedef :state = {
    top: 0,
    left: 0,
    bottom:0,
    right:0,
}
export const Desktop: file [] = [
    {
        id:-1,
        path: new Array(),
        icon: icon.Trash,
        windowState:{
            top: 220,
            left: 10,
            bottom:0,
            right:0,
        },
        name: "Trash",
        type: filetype.Trash,
        description: "Trashcan",
        content: new Array<file>()
    },
    {
        id:1,
        path: new Array(),
        icon: icon.Folder,
        windowState:{
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
        path: new Array(),
        icon: icon.Folder,
        windowState:{
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

]
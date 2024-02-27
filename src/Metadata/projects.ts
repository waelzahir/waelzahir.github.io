import { file, filetype, icon, state } from "../types/ProgramType";

export const statedef :state = {
    top: 0,
    left: 0,
    bottom:0,
    right:0,
}

export const Desktop: file []  =
[
    {
        id:0,
        description:"root",
        icon: icon.Desktop,
        Parent: 0,
        name: "Desktop",
        type:filetype.Folder,
        windowState:{
            top: 220,
            left: 10,
            bottom:0,
            right:0,
        },
        content: [
            1,
            2,
            3,
        ]
    }
    ,
    {
        id:1,
        icon: icon.Trash,
        windowState:{
            top: 220,
            left: 10,
            bottom:0,
            right:0,
        },
        Parent: 0,

        name: "Trash",
        type: filetype.Trash,
        description: "Trashcan",
        content: new Array<file>()
    }
    ,
    {
        id:2,
        icon: icon.Folder,
        Parent: 0,

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
        id:3,
        Parent: 0,

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


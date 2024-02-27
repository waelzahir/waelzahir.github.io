export enum filetype {
    Folder = "folder",
    Project = "Project",
    Text= "Text",
    Trash= "Trash"
}
export enum icon  {
    Desktop,
    Folder,
    Explorer,
    Internet,
    Text,
    Trash
}
export type state ={
    top:number,
    left:number
    bottom:number,
    right:number,
}
export type file = {
    id:number
    icon:icon,
    Parent: number
    windowState :state,
    name: string,
    type: filetype,
    description: string
    content:any
}

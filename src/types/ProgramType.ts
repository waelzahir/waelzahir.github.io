export enum filetype {
    Folder = "folder",
    Project = "Project",
    Text= "Text",
    Trash= "Trash"
}
export enum icon  {
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
    path: string []
    icon:icon,
    windowState :state,
    name: string,
    type: filetype,
    description: string
    content:any
}
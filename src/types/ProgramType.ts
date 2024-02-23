export enum filetype {
    Folder = "folder",
    Exec = "exec",
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
    opened: boolean,
    top:number,
    left:number
    bottom:number,
    right:number,
}
export type file = {
    id:number
    parent:number,
    level:number
    icon:icon,
    windowState :state,
    name: string,
    type: filetype,
    description: string
    content:any
    
}
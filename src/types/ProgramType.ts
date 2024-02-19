export enum filetype {
    Folder = "folder",
    Exec = "exec",
    Project = "Project",
    Text= "Text"
}
export enum icon  {
    Folder,
    Explorer,
    Internet,
    Text
}
export type state ={
    opened: boolean,
    width: number,
    height: number,
    x:number,
    y:number
}
export type file = {
    id:number
    icon:icon,
    windowState :state,
    visibilityindex: number
    name: string,
    type: filetype,
    description: string
    content:any
    
}
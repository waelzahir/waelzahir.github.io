export enum filetype {
    Folder = "folder",
    Exec = "exec",
    Project = "Project"
}
export enum icon  {
    Folder,
    Explorer,
    Internet,

}
export type state ={
    opened: boolean,
    width: number,
    height: number,
    x:number,
    y:number
}
export type file = {
    icon:icon,
    windowState :state,
    visibilityindex: number
    name: string,
    type: filetype,
    description: string
    content:any
    
}
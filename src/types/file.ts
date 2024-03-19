export  enum Progtype
{
    text,
    folder,
    github,
    about
}
export type cord = {
    left : number,
    top:number
}
export type file = {
    name: string,
    parent: number
    id:number,
    type:Progtype,
    cordinates: cord | null;
    content: any;
}
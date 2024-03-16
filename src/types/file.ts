export  enum Progtype
{
    text,
    folder,
    github
}

export type file = {
    name: string,
    parent: number
    id:number,
    type:Progtype,
    content: any;
}
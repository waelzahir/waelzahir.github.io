export  enum Progtype
{
    text,
    folder,
    github
}

export type file = {
    name: string,
    id:number,
    type:Progtype,
    content: any;
}
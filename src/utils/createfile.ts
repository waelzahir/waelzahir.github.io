import { Progtype, file } from "../types/file";

export const CreateFile = (name :string,id:number, type:Progtype, content:any, parent:number) : file =>
{
    return {
        name:name,
        parent: parent,
        id:id,
        cordinates:null,
        content: content,
        type:type,
    }
}
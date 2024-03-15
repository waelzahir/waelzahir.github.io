import { Progtype, file } from "../types/file";

export const CreateFile = (name :string,id:number, type:Progtype, content:any) : file =>
{
    return {
        name:name,
        id:id,
        content: content,
        type:type,
    }
}
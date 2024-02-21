import { file, filetype } from "../types/ProgramType";

export const recFindIndex = (file: file[], target:file,  level:number,  indexes: number[]) :boolean => {

    if (level > target.parent || !file.length)
        return false
for (let i = 0 ; i < file.length; i++)
{
        if (file[i].type === filetype.Folder && recFindIndex(file[0].content,target, level + 1,indexes ))
        {
            indexes.push(i)
            return true
        }
        else if (file[i].id === target.id)
        {
            indexes.push(i)
            return true
        }

    }
    return false
}

export const removeFileRecord = (file: file[], indexes:number[], level:number = 0)=>
{
    if (level == indexes.length-1)
    {
        const target = file[indexes[level]]
        if (target.parent === 0)
            localStorage.removeItem(target.id.toString())
        file = file.filter((f: file) => f.id !==  target.id)
        return file
    }
    else
    {
        file[indexes[level]].content = removeFileRecord(file[indexes[level]].content , indexes, level + 1);
    }
    return file
}

export const moveFile = (files: file [] , id: number , target: file ) => {
    const index = files.findIndex((file: file) => file.id === id)
    files[index].content.push(target);
    localStorage.setItem(id.toString(), JSON.stringify(files[index]))
    return files
}

import { file } from "../types/ProgramType";



export const removeFileRecord = (file: file[], target: file, level:number )=>
{
   if ( !target.path.length || target.path.length - 1 === level )
   {
        if (!level)
            localStorage.removeItem(target.id.toString())
        file = file.filter((f: file) => f.id !==  target.id)
        return file
   }
   else
   {
        let index = file.findIndex((f:file) => f.name === target.path[level])

       file[index].content = removeFileRecord(file[index].content , target, level + 1);
   }
   return file
}


export const moveToTrash = (files: file [] , id: number , target: file ) => {
    const index = files.findIndex((file: file) => file.id === id)
    files[index].content.push(target);
    localStorage.setItem(id.toString(), JSON.stringify(files[index]))
    return files
}

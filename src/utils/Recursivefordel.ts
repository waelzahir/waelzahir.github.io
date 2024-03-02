import { file, filetype } from "../types/ProgramType";

export const getFilesfromID = (files: number[],filesystem :Map<number, file>) : file[] =>{
    console.log(files, "file found", filesystem)
    if (files === undefined)
        return []
    const retu: file[] = []
    files.map((id:number)=> {
        const f = filesystem.get(id)
        if (f === undefined)
            return 
        retu.push(f);
    })
    return retu
}

// export const removeFileRecord = (src: file, target: file, level:number )=>
// {

// }


// export const moveToTrash = (files: file [] , id: number , target: file ) => {

// }

export const RecoverFromTrash = (filesystem :Map<number, file>, recoverd : number[]) =>
{
    const trash =  filesystem.get(1)
    if (trash === undefined)
        return filesystem
    trash.content = []
    filesystem.set(1, trash);
    localStorage.setItem("1", JSON.stringify( trash));
    recoverd.map((id: number) =>{
        const fil = filesystem.get(id)
        if (fil === undefined)
            return; 
        const dest = filesystem.get(fil.Parent)
        if (dest === undefined)
            return; 
        dest.content.push(fil.id)
        filesystem.set(dest.id, dest);
        localStorage.setItem(dest.id.toString(), JSON.stringify( dest));

    })
    return filesystem
}
const recursivedelete =(Filesystem :Map<number, file>,all:number[], fill:number[]) =>{
    for (let i = 0 ; i < all.length ; i++)
    {
        const f = Filesystem.get(all[i])
        if (f === undefined)
            continue
        if (f.type===filetype.Folder )
            recursivedelete(Filesystem, f.content,fill)
        fill.push(f.id)
    }

}
export const RemovePermanatly  = (filesystem :Map<number, file>)   =>
{
    const trash =  filesystem.get(1)
    if (trash === undefined)
        return filesystem
    let allids:number [] =[] 
    recursivedelete(filesystem , trash.content,allids)
    allids =  Array.from(new Set(allids));
    trash.content = []
    filesystem.set(1, trash);
    localStorage.setItem("1", JSON.stringify(trash));
    allids.map((id: number) =>{
        const fil = filesystem.get(id)
        if (fil === undefined)
            return; 
        filesystem.delete(id)
        localStorage.removeItem(id.toString());
    })
    return filesystem
}

export const  GetFilePath = (filesystem :Map<number, file>,   file: number): string => {
    let path :string[] = [];
    let currid = file;
    let fi;
    while(true)
    {
        fi = filesystem.get(currid)
        if (fi === undefined)
        {
            path.push("<brokenlink>")
            break
        }
        path.push(fi.name)
        if (fi.Parent === 0)
            break;

        currid = fi.Parent
    }
    return "/" + path.reverse().join("/")

}

export const itschild = (folder: number, file:number, filesystem :Map<number, file>) : boolean => {

    if (folder === file)
        return true
    let parent = folder;
    let f: file | undefined;
    while(parent !== 0)
    {
        f = filesystem.get(parent)
        if (f === undefined)
            return false;
        if (f.Parent === file)
            return true
        parent = f.Parent
    }


    return false
}
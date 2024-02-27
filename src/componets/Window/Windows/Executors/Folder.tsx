import { useContext } from "react";
import { ProgramState } from "../../../../types/ProgramState";
import { file, filetype } from "../../../../types/ProgramType";
import { getIcon } from "../../Files/file";
import FileSystemContext from "../../../../Context/fileSystem";
import {  GetFilePath, RecoverFromTrash, RemovePermanatly } from "../../../../utils/Recursivefordel";

export const FolderContent= ({state}:{state:ProgramState})=>{
    let leftPannel;
    switch (state.file.type)
    {
        case filetype.Trash:
            leftPannel = <TrashTools state={state}/>
            break ;
        case filetype.Folder:
                leftPannel = <FolderTools state={state}/>
                break ;
        default:
            leftPannel = null
    }
    return (
        <div className="h-full w-full flex flex-row">
            <div id="Tools" className="h-full w-60 bg-[#718de1] flex justify-center items-center">
            <div className=" w-56 h-[80%]">
                {leftPannel}
            </div>
            </div>
            <div className="flex flex-col h-full flex-1 gap-2 overflow-y-scroll items-center">
                <div className="h-11 w-[90%] flex flex-row justify-between items-center sticky top-0 bg-contextMenu">

                    <div className="h-9 flex justify-center items-center">
                        <h1>
                            Icon
                        </h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <h1>
                            Name
                        </h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <h1>
                            Path
                        </h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <h1>
                            Type
                        </h1>
                    </div>
                </div>
                {
                    state.file.content.map((file :file) =>  <FileData FileData={file}/>) 
                }
            </div>
        </div>
    )

}

  const FolderTools= ({state}:{state:ProgramState})=>{
    return (
        <div className="h-full w-56 ">
            for folder
        </div>
    )
}
  const TrashTools= ({state}:{state:ProgramState})=>{
    const FileSystem  = useContext(FileSystemContext)
    const emptyTrash = ()=>
    {
        if (!FileSystem)
            return ;
        FileSystem[1]((files : Map<number, file>) => {
        let trash = files.get(1)
        if (trash === undefined)
            return files
        const recoverd = trash.content
        files = RemovePermanatly(files, recoverd)
        return new Map(files)
    })
    }
    const RecoverFiles  = ()=>{
        if (!FileSystem)
            return ;
        FileSystem[1]((files : Map<number, file>) => {
            let trash = files.get(1)
            if (trash === undefined)
                return files
            const recoverd = trash.content
            files = RecoverFromTrash(files, recoverd)
            return new Map(files)
        })
    }
    return (
        <div className="rounded bg-[#d8dff9] h-20 flex flex-col justify-around items-center font-tahoma text-[#456389]">
           <h1 onClick={() => emptyTrash()} className="w-40 cursor-pointer hover:text-[#93b0d0]">
                Empty Trash
           </h1>
           <h1 onClick={() => RecoverFiles()} className="w-40 cursor-pointer hover:text-[#93b0d0]">
                Recover Files
           </h1>
        </div>
    )

}

const FileData = ({FileData} : {FileData : file}) =>
{
    const fileSystem = useContext(FileSystemContext)
    
    return (
        <div className=" flex flex-row h-10 justify-between w-[90%]">
            <div className="h-9 flex justify-center items-center">
                <img  className="h-8" src={getIcon(FileData.icon)} alt="" />
            </div>
            <div className="flex justify-center items-center">
                <h1>
                    {FileData.name}
                </h1>
            </div>
            <div className="flex justify-center items-center">
                <h1>
                    {fileSystem ? GetFilePath(fileSystem[0], FileData.id) : ""}
                </h1>
            </div>
            <div className="flex justify-center items-center">
                <h1>
                    {FileData.type}
                </h1>
            </div>
        </div>
    )
}
import { ProgramState } from "../../../../types/ProgramState";
import { file, filetype } from "../../../../types/ProgramType";
import { getIcon } from "../../Files/file";

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
            <>
            {leftPannel}
            </>
            <div className="flex flex-col h-full flex-1 gap-2 overflow-y-scroll">
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
    return (
        <div className="h-full w-56 ">
           <h1>
                Empty Trash
           </h1>
           <h1>
                Recover Files
           </h1>
        </div>
    )

}

const FileData = ({FileData} : {FileData : file}) =>
{
    
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
                    { "/" + FileData.path.join("/") + FileData.name}
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
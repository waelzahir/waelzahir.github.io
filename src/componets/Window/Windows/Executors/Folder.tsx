import { useContext, useState } from "react";
import { ProgramState } from "../../../../types/ProgramState";
import { file, filetype, icon } from "../../../../types/ProgramType";
import { getIcon } from "../../Files/file";
import FileSystemContext from "../../../../Context/fileSystem";
import {  GetFilePath } from "../../../../utils/Recursivefordel";
import { highestid } from "../../../../App";
import { statedef } from "../../../../Metadata/projects";

export const FolderContent= ({ clipboard, setClipboard, state}:{clipboard: file |null,setClipboard:any, state:ProgramState})=>{
    const [history, setHistory] = useState([state.file.id])
    const [index, setIndex] = useState(0)

    return (
        <div className="h-full w-full flex flex-row">
            <div id="Tools" className="h-full w-60 bg-[#718de1] flex justify-center items-center">
            <div className=" w-56 h-[80%]">
                <FolderTools clipboard={clipboard} setClipboard={setClipboard} history={history} setHistory={setHistory} index={index}/>
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
                    state.file.content.map((file :number) =>  <FileData FileId={file}/>) 
                }
            </div>
        </div>
    )

}

const CreateNewFile = (e:any ,folder: number, setFile: any, what:string) =>
{
    console.log("setting file")

    const TEXT : file = {
        id:highestid.id, 
        Parent: folder,
        name: "untitled text",
        content: "",
        description: "untitled text",
        icon: icon.Text,
        type: filetype.Text,
        windowState: statedef
    }
    const Folder : file = {
        id:highestid.id, 
        Parent: folder,
        name: "New Folder",
        content: [],
        description: "New Folder",
        icon: icon.Folder,
        type: filetype.Folder,
        windowState: statedef
    }
    let nn : file = what === "f" ? Folder : TEXT
    highestid.id++;
    setFile((files :Map<number, file>) => {
       const parent = files.get(folder)
       console.log(parent)
       if (parent === undefined)
        return files
        parent.content.push(nn.id)
        files.set(parent.id, parent)
        files.set(nn.id, nn)
        localStorage.setItem(nn.id.toString(), JSON.stringify(nn))
        localStorage.setItem(parent.id.toString(), JSON.stringify(parent))
        return new Map(files)
    })
    console.log("setting file")
}
const PasteFile = (e:any, folder:number , setClipboard:any, clipboard:file|null, filesystem:any) =>{
    if (!clipboard || folder===undefined)
        return

    const src:file = filesystem[0].get(clipboard.Parent)
    const dst:file = filesystem[0].get(folder)
    if (src === undefined || dst === undefined)
        return ;
    src.content = src.content.filter((num: number) => num != clipboard.id)
    dst.content.push(clipboard.id)
    clipboard.Parent = folder
    localStorage.setItem(src.id.toString(), JSON.stringify(src))
    localStorage.setItem(dst.id.toString(), JSON.stringify(dst))
    localStorage.setItem(clipboard.id.toString(), JSON.stringify(clipboard))
    filesystem[0].set((src.id, src))
    filesystem[0].set((dst.id, dst))
    filesystem[0].set((clipboard.id, clipboard))
    filesystem[1](new Map(filesystem[0]))
    setClipboard(null)
}
  const FolderTools= ({ clipboard , setClipboard,  history, setHistory , index} : { clipboard: file | null , setClipboard :any ,history : number[], setHistory:any, index:number })=>{
    const FileSystem = useContext(FileSystemContext)
    if (!FileSystem)
        return null;
 

    return (
        <div className="h-[70%] w-full  flex flex-col justify-evenly">
            <div className="rounded bg-[#d8dff9] h-32 flex flex-col justify-around items-center font-tahoma text-[#456389]">
                <h1 onClick={(e:any) => CreateNewFile(e, history[index],  FileSystem[1], "t")} className="w-40 cursor-pointer hover:text-[#93b0d0]">
                    New File
                </h1>
                <h1 onClick={(e:any) => CreateNewFile(e, history[index],  FileSystem[1], "f")}  className="w-40 cursor-pointer hover:text-[#93b0d0]">
                    New Folder
                </h1>
                <h1 onClick={(e:any) => PasteFile(e, history[index], setClipboard, clipboard, FileSystem) } className={` ${clipboard ?"cursor-pointer hover:text-[#93b0d0]": "text-gray-500"} w-40  `}>
                    Paste
                </h1>
            </div>
            <div className="rounded bg-[#d8dff9] h-32  flex flex-col justify-around items-center font-tahoma text-[#456389]">
                <h1 onClick={(e:any) => {}} className="w-40 cursor-pointer hover:text-[#93b0d0]">
                    Rename
                </h1>
                <h1 onClick={(e:any) => {}} className="w-40 cursor-pointer hover:text-[#93b0d0]">
                    Delete
                </h1>
                <h1 onClick={(e:any) => {}} className="w-40 cursor-pointer hover:text-[#93b0d0]">
                    Cut
                </h1>
            </div>
           
     </div>
    )
}
  

const FileData = ({FileId} : {FileId : number}) =>
{
    const fileSystem = useContext(FileSystemContext)
    if (!fileSystem)
        return null


    let FileData = fileSystem[0].get(FileId)  ;
    if (FileData == undefined)
        return null

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
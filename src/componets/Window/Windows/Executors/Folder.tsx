import { useContext, useEffect, useState } from "react";
import { ProgramState } from "../../../../types/ProgramState";
import { file, filetype, icon } from "../../../../types/ProgramType";
import { getIcon } from "../../Files/file";
import FileSystemContext from "../../../../Context/fileSystem";
import {  GetFilePath } from "../../../../utils/Recursivefordel";
import { highestid } from "../../../../App";
import { statedef } from "../../../../Metadata/projects";
import Back from "../../../../assets/Back.png"
import Forward from "../../../../assets/Forward.png"



const  Toolbar  =({history, index, setindex, Filesystem}:{history:number[], index:number, setindex :any, Filesystem: Map <number, file>})=>{
    console.log("rerender ?? "+ index, history[index])
    return (

        <div className="h-20 w-full flex flex-row items-center bg-[#eeecdd] gap-x-7 font-tahoma font-bold">
                <div className=" h-full flex flex-row items-center gap-x-2 ml-2">
                    <img onClick={() => setindex(index  > 0 ? index - 1 : index)} className={`h-10 ${index > 0 ? "hover:opacity-80 cursor-pointer": "grayscale"}`} src={Back} alt="" />
                    <h1>
                        Back
                    </h1>
                </div>
                <div>
                    <img onClick={() => setindex(index< history.length -1 ? index + 1 : index)} className={`h-10 ${index < history.length -1 ? "hover:opacity-80 cursor-pointer": "grayscale"}`} src={Forward} alt="" />
                </div>
                <h1 className="text-sm text-gray-500">Adress</h1>
                <div className="border-2 h-10 w-[60%] flex items-center bg-white">

                    <h1>{GetFilePath(Filesystem, history[index])}</h1>
                </div>
        </div>
        )
}
export const FolderContent= ({ clipboard, setClipboard, state}:{clipboard: file |null,setClipboard:any, state:ProgramState})=>{
    const [history, setHistory] = useState(new Array(1).fill(state.file.id))
    const [index, setIndex] = useState(0)
    const [clicked, setClicked] = useState(0)
    const Filesystem = useContext(FileSystemContext)
    if (!Filesystem)
    return null
    let file:file | undefined= Filesystem[0].get(history[index])
    if (file === undefined)
        return null
    console.log("history is", history, "index is", index)
    return (
        <div className=" w-full h-full flex-col ">
            <Toolbar history={history}  index={index} setindex={setIndex} Filesystem={Filesystem[0]}/>
        <div className="h-full w-full flex flex-row">
            <div id="Tools" className="h-full w-60 bg-[#718de1] flex justify-center items-center">
            <div className=" w-56 h-[80%]">
                <FolderTools  setClicked={setClicked} clicked={clicked} clipboard={clipboard} setClipboard={setClipboard} history={history}  index={index}/>
            </div>
            </div>
            <div className="flex flex-col h-full flex-1 gap-2 overflow-y-scroll items-center">
                <div className="h-11 w-[90%] flex flex-row justify-between items-center sticky top-0 bg-contextMenu border-b-2">
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
                    file.content.map((file :number) =>  <FileData key={file} setHistory={setHistory} setindex={setIndex} clicked={clicked} setClicked={setClicked}  FileId={file}/>) 
                }
            </div>
        </div>
        </div>
    )

}

const CreateNewFile = (folder: number, setFile: any, what:string) =>
{

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
const CutFile = (fileid:number, setClipboard:any, filesystem:Map<number, file>, setClicked:any) =>{
    if(fileid === undefined || fileid < 1)
        return
    const file = filesystem.get(fileid)
    if (file === undefined)
        return;
    setClipboard(file)
    setClicked(0)
    }
const PasteFile = (folder:number , setClipboard:any, clipboard:file|null, filesystem:any) =>{
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
const DeleteFile = (fileid :number ,FileSys :any, setClicked:any) =>{
    if (fileid === undefined || fileid < 1)
        return
    const trash :file|undefined= FileSys[0].get(1)
    const file :file|undefined = FileSys[0].get(fileid)
    if (trash === undefined|| file === undefined)
        return
    const parent:file|undefined = FileSys[0].get(file.Parent)
    if (!parent)
        return ;
    trash.content.push(fileid)
    parent.content = parent.content.filter((id:number) => id != fileid)
    FileSys[0].set(trash.id, trash)
    FileSys[0].set(parent.id, parent)
    localStorage.setItem(trash.id.toString(), JSON.stringify(trash))
    localStorage.setItem(trash.id.toString(), JSON.stringify(trash))
    FileSys[1](new Map(FileSys[0]))
    setClicked(0)
}
  const FolderTools= ({ setClicked, clicked, clipboard , setClipboard,  history , index} : {setClicked:any ,clicked:number, clipboard: file | null , setClipboard :any ,history : number[],  index:number })=>{
    const FileSystem = useContext(FileSystemContext)
    if (!FileSystem)
        return null;
 

    return (
        <div className="h-[70%] w-full  flex flex-col gap-y-4">
            <div className="rounded bg-[#d8dff9] h-32 flex flex-col justify-around items-center font-tahoma text-[#456389]">
                <h1 onClick={() => CreateNewFile( history[index],  FileSystem[1], "t")} className="w-40 cursor-pointer hover:text-[#93b0d0]">
                    New File
                </h1>
                <h1 onClick={() => CreateNewFile( history[index],  FileSystem[1], "f")}  className="w-40 cursor-pointer hover:text-[#93b0d0]">
                    New Folder
                </h1>
                <h1 onClick={() => PasteFile( history[index], setClipboard, clipboard, FileSystem) } className={` ${clipboard ?"cursor-pointer hover:text-[#93b0d0]": "text-gray-500"} w-40  `}>
                    Paste
                </h1>
            </div>
           
            <div className="rounded bg-[#d8dff9] h-32  flex flex-col justify-around items-center font-tahoma text-[#456389]">
                <div className="flex flex-row  w-40 justify-between">
                    <h1  className={` ${clicked > 0 ?"cursor-pointer hover:text-[#93b0d0]": "text-gray-500"}   `}>
                        Rename
                    </h1>
                    <RenameFile id={clicked} setClicked={setClicked}/>
                </div>
                <h1 onClick={() => DeleteFile(clicked,FileSystem, setClicked)} className={` ${clicked > 0 ?"cursor-pointer hover:text-[#93b0d0]": "text-gray-500"} w-40  `}>
                    Delete
                </h1>
                <h1 onClick={() => CutFile(clicked,setClipboard,  FileSystem[0], setClicked)} className={` ${clicked > 0 ?"cursor-pointer hover:text-[#93b0d0]": "text-gray-500"} w-40  `}>
                    Cut
                </h1>
            </div>
     </div>
    )
}
  
const handleClick = (clicked : number, FileId:number , setClicked:any ,setindex:any, setHistory:any)=>{
  

    if (clicked !== FileId)
    {
        setClicked(FileId)
        return
    }
    setClicked(0)
    setindex((ind:number) => {
        setHistory((prev: number[]) => {
        const nhist =  prev.slice(0, ind)
        nhist.push(FileId)
        return nhist
        })
        ind++
        return ind
    })
}
const FileData = ({ setindex, setHistory, clicked,setClicked ,FileId} : {setindex:any, setHistory:any, clicked: number , setClicked:any, FileId : number}) =>
{
    const fileSystem = useContext(FileSystemContext)
    if (!fileSystem)
        return null


    let FileData = fileSystem[0].get(FileId)  ;
    if (FileData == undefined)
        return null

    return (
        <div onClick={() => handleClick(clicked, FileId, setClicked, setindex, setHistory)} className={`${clicked === FileId ? "bg-ContextSelection" : ""} flex flex-row h-10 justify-between w-[90%] cursor-pointer`}>
          
            <div className="flex justify-center items-center">
                <img  className="h-8" src={getIcon(FileData.icon)} alt="" />
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
const   RenameFile =  ({id, setClicked}: {id:number,setClicked:any}) =>  {
    const FileSys = useContext(FileSystemContext)
    const [name, setname] = useState("dst.name")

    useEffect(() => {
        if (!FileSys || id < 1)
            return  ;
        const dst = FileSys[0].get(id)
        if (dst === undefined)
            return 
        setname(dst.name)
    }, [id])
    if (!FileSys || id < 1)
        return  null;
    const dst = FileSys[0].get(id)
    if (dst === undefined)
        return null
    const newName = (e:any) =>
    {
        if (e.which != 13)
            return ;
        dst.name = name
        FileSys[0].set(dst.id, dst)
        localStorage.setItem(dst.id.toString(), JSON.stringify(dst))
        setClicked(0)
        setname("")
    }
    return (
        <div  className="">
            <input onKeyDown={(e)=> newName(e)} onChange={(e) => setname(e.target.value)} className="w-20 border-2 font-tahoma font-bold text-sm" value={name} type="text" />
        </div>
    )
}
import { useContext, useEffect, useState } from "react"
import MemProviderContext from "../../../Context/MemContext";
import { ExecutionState, ProgramState, screen } from "../../../types/ProgramState";
import { file } from "../../../types/ProgramType";
import { moveFile, recFindIndex, removeFileRecord } from "../../../utils/Recursivefordel";
import { highestid } from "../../../App";

const execfile = (file:file)  : ProgramState =>
{
    const screen :screen = {
        height: 500,
        width:500,
        x:0,
        y: 0,
    }
    highestid.exec++
    return {
        proccess:highestid.exec,
       file: file,
       state: ExecutionState.opened,
       screen : screen
    }
}

const openfile = (e:MouseEvent , operand:file| null , Memory:any, setOperand : any) => {
    e.preventDefault()
    e.stopPropagation()
    if (!operand)
        return ;
    Memory[1]((state: ProgramState[]) => {
        state.push(execfile(operand))
    return state.slice()})
    setOperand(null)
    const menu = document.getElementById("filecontex") ;

    if (menu && !menu.classList.contains("hidden"))
            menu.classList.add("hidden")
}
const addtoclipboard = (e:MouseEvent ,setoperand:any, setClipboard:any) =>
{
    e.preventDefault()
    e.stopPropagation()
    setoperand((f :file | null) => {
        if (f)
            setClipboard(f)
        return null
    })
    const menu = document.getElementById("filecontex") ;

    if (menu && !menu.classList.contains("hidden"))
            menu.classList.add("hidden")
}
const DeleteFile = (e:MouseEvent, setClipboard :any, SetFileSystem:any ,operand :file | null, setoperand: any) =>{
    e.preventDefault()
    e.stopPropagation()
    const menu = document.getElementById("filecontex") ;

    if (menu && !menu.classList.contains("hidden"))
            menu.classList.add("hidden")
    if (!operand || operand.id === -1)
        return 
    setClipboard((file:file) => file && file.id == operand.id ? null : file)
    SetFileSystem((files: file []) => {
        let newstructor :file [] = files.slice()
        const indexes : number[] = new Array()
        const exist = recFindIndex(newstructor, operand, 0, indexes) 
        if (exist)
        {
            newstructor = removeFileRecord(newstructor, indexes)
            newstructor = moveFile(newstructor , -1, operand)
        }
        return newstructor
    })        
    setoperand(null)
}
const RenameFile  = (e:MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const el = document.getElementById("FileRename")    
    if (!el)
        return
    const menu = document.getElementById("filecontex") ;

    if (menu && !menu.classList.contains("hidden"))
            menu.classList.add("hidden")
    setTimeout(() => {
        if (el.classList.contains("hidden"))
            el.classList.remove("hidden")
    }, 0)
    if (!el.classList.contains("hidden"))
           el.classList.add("hidden")
    el.style.left = `${window.innerWidth / 2 - 96}px`
    el.style.top = `${window.innerHeight / 2 - 48 }px`
}
const FileContextMenu =({setClipboard, SetFileSystem, operand,setoperand}:{setClipboard:any, SetFileSystem :any, operand:file|null, setoperand : any}) =>
{
    const Memory = useContext(MemProviderContext)
    useEffect(() => {
        const open = document.getElementById("Open");
        const cut = document.getElementById("Cut");
        const Delete= document.getElementById("Delete");
        const Rename = document.getElementById("Rename");
        const Properites = document.getElementById("Prop");
        if (!open || !cut || !Delete || !Rename || !Properites || !Memory )
            return ;
        open.addEventListener("click", (e) => openfile(e,operand ,Memory, setoperand))
        cut.addEventListener("click", (e) => addtoclipboard(e, setoperand, setClipboard))
        Delete.addEventListener("click", (e) => DeleteFile(e, setClipboard, SetFileSystem ,operand,  setoperand))
        Rename.addEventListener("click", (e) => RenameFile(e ))
        // Properites.addEventListener
        return () =>{
            if (!open || !cut || !Delete || !Rename || !Properites)
                return ;
                open.removeEventListener("click", (e) => openfile(e,operand ,Memory, setoperand))
                cut.removeEventListener("click", (e) => addtoclipboard(e, setoperand, setClipboard))
                Delete.removeEventListener("click", (e) => DeleteFile(e, setClipboard, SetFileSystem ,operand,  setoperand))
                Rename.removeEventListener("click", (e) => RenameFile(e ))
        }
    }, [operand])
    return (
        <div id="filecontex" className="hidden absolute w-40 bg-contextMenu font-tahoma flex flex-col items-center z-[50] border-[1px] border-Contextborder">
            <div className="w-[80%] h-8 flex flex-col items-center justify-around">
                <div id="Open" className="w-full items-center ">
                    <h1>
                        Open
                    </h1>
                </div>
            </div>
            <div className="h-1 w-[95%]  border-t-2 border-Contextborder"></div>
            <div className="w-[80%] h-16 flex flex-col items-center justify-around">
              
                <div id="Cut" className="w-full items-center Cut hover:bg-ContextSelection">
                    <h1>
                        Cut
                    </h1>
                </div>
                <div id="Delete" className="w-full  items-center Delete hover:bg-ContextSelection">
                    <h1>
                        Delete
                    </h1>
                </div>
            </div>
            <div className="h-1 w-[95%]  border-t-2 border-Contextborder"></div>
            <div className="w-[80%] h-16 flex flex-col items-center justify-around">
                <div  id="Rename" className="w-full items-center Rename  hover:bg-ContextSelection">
                    <h1>
                        Rename
                    </h1>
                </div>
                <div id="Prop" className="w-full  items-center Properties hover:bg-ContextSelection">
                    <h1>
                        Properties
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default FileContextMenu
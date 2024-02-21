import { useContext, useEffect, useState } from "react"
import MemProviderContext from "../../../Context/MemContext";
import { ExecutionState, ProgramState } from "../../../types/ProgramState";
import { file } from "../../../types/ProgramType";
import { moveFile, recFindIndex, removeFileRecord } from "../../../utils/Recursivefordel";
const openfile = (e:MouseEvent ,Memory:any) => {
    e.preventDefault()
    e.stopPropagation()
    Memory[1]((state: ProgramState[]) => {
        if(state[state.length - 1] && state[state.length - 1].state === ExecutionState.staged)
        state[state.length - 1].state = ExecutionState.opened;
    return state.slice()})
}
const addtoclipboard = (e:MouseEvent ,Memory:any, setClipboard:any) =>
{
    Memory[1]((state: ProgramState[]) => {
        if( state.length && state[state.length - 1].state === ExecutionState.staged)
            {
                setClipboard(state[state.length -1].file)
                state.pop()
            }
        return state.slice()})
}
const DeleteFile = (e:MouseEvent, Memory:any, setClipboard :any, SetFileSystem:any) =>{
    Memory[1]((state: ProgramState[]) => {
        
        
        if( state.length && state[state.length - 1].state === ExecutionState.staged)
            {
                const filem = state[state.length-1].file;
                if (filem.id === -1)
                    return state;

                setClipboard((file:file) => file && file.id == filem.id ? null : filem)
                state.pop()
                SetFileSystem((files: file []) => {
                    let newstructor :file [] = files.slice()
                    const indexes : number[] = new Array()
                    const exist = recFindIndex(newstructor, filem, 0, indexes) 
                    if (exist)
                    {
                        newstructor = removeFileRecord(newstructor, indexes)
                        newstructor = moveFile( newstructor , -1, filem)
                    }

                    return newstructor
                })
            }
        return state.slice()})
}
const RenameFile  = (e:MouseEvent, Memory:any, setClipboard :any, SetFileSystem:any) => {
    e.preventDefault()
    e.stopPropagation()

    const el = document.getElementById("FileRename")
    setTimeout(() => {
        if (el && el.classList.contains("hidden"))
            el.classList.remove("hidden")

    }, 0)
    if (el && !el.classList.contains("hidden"))
       {
           el.style.left = `${e.clientX  - (el?.offsetWidth / 2)}px`
           el.style.top = `${e.clientY  - (el?.offsetHeight / 2)}px`
           el.classList.add("hidden")

       }

    // Memory[1]((file: file[]) => {

    //     // const newState()
    // })

}
const FileContextMenu =({setClipboard, SetFileSystem}:{setClipboard:any, SetFileSystem :any}) =>
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
        open.addEventListener("click", (e) => openfile(e,Memory))
        cut.addEventListener("click", (e) => addtoclipboard(e, Memory, setClipboard))
        Delete.addEventListener("click", (e) => DeleteFile(e, Memory, setClipboard, SetFileSystem))
        Rename.addEventListener("click", (e) => RenameFile(e, Memory, setClipboard, SetFileSystem))
        // Properites.addEventListener
        return () =>{
            if (!open || !cut || !Delete || !Rename || !Properites)
                return ;
        }
    }, [])
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
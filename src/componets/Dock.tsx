import { memo, useContext, useEffect, useRef, useState } from "react"
import MemProviderContext from "../Context/MemContext"
import Terminal from "../assets/xterm.svg"
import { LoadedProg } from "../types/Memory"
import FileSystemContext from "../Context/fileSystem"
import { GetSrc, geticon } from "./Window/Files/file"
import { GitProject } from "../types/gitProject"
import { Progtype } from "../types/file"


const Resize = (dock:any) =>{
    
    dock.style.top = (window.innerHeight - 105 ) + "px"
    dock.style.left = ((window.innerWidth  / 2) - (dock.getBoundingClientRect().width / 2)) + "px"
       

}
const DockElem = ({state} : {state : LoadedProg}) =>{
    const filesys = useContext(FileSystemContext)
    console.log("elem1")
    if (!filesys)
        return null ; 
    const file = filesys[0].get(state.loadedFile)
    console.log("elem2")

    if (!file)
        return null
        console.log("elem3")

        const icon = file.type ===Progtype.github ? GetSrc((file.content as GitProject).language) : geticon(file.type)

    return (
        <div className="w-16 h-16 flex justify-center items-center">
            <img  className="w-12 h12" src={icon} alt="" />
        </div>
    )
}

const Dock = ()=>
{
    const Memory = useContext(MemProviderContext)
    
    if (!Memory)
        return null    
    useEffect(() =>{
        const dock = document.getElementById("dock");
        if (!dock)
          return
        dock.style.top = (window.innerHeight - 105 ) + "px"
        dock.style.left = ((window.innerWidth  / 2) - (dock.getBoundingClientRect().width / 2)) + "px"   
        window.addEventListener("resize", () => Resize(dock))
        return () =>{
          if (dock)
          window.removeEventListener("resize", () => Resize(dock))
        }
    }, [Memory[0]])
    const  Programs = Array.from(Memory[0]).map(([, value]) => value)

    return (
        <div id="dock"  className=" bg-green-950/30 min-w-32 h-24 backdrop-blur-sm absolute rounded-3xl  flex flex-row justify-around items-center">
            {Programs.map((state:any) => <DockElem key={state.proccess} state={state}/>)}
        </div>
    )
}
export default Dock
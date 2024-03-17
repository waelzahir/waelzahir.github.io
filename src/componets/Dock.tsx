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
        <div className="w-16 h-16 min-w-16 min-h-16 flex justify-center items-center">
            <img  className="w-12 h-12" src={icon} alt="" />
        </div>
    )
}

const Dock = ()=>
{
    const Memory = useContext(MemProviderContext)
    const dref = useRef<HTMLDivElement>(null)
    
    if (!Memory)
        return null    
    useEffect(() =>{
        const dock = document.getElementById("dock");
        if (!dock)
          return
        Resize(dock)
        window.addEventListener("resize", () => Resize(dock))
        return () =>{
          if (dock)
          window.removeEventListener("resize", () => Resize(dock))
        }
    }, [Memory[0]])
    const  Programs = Array.from(Memory[0]).map(([, value]) => value)
    const overflows = dref.current?.getBoundingClientRect().width === 1024 ? true : false 
    
    return (
        <div ref={dref} id="dock"  className=" bg-green-950/30 min-w-16 h-24 backdrop-blur-sm absolute rounded-3xl  flex flex-row  max-w-screen-lg  ">
            {overflows ?
                <div className="h-full w-10 bg-black">

                </div>:
                null
            }
            <div className="flex-1 h-full flex flex-row  items-center   overflow-x-scroll ">
                {Programs.map((state:any) => <DockElem key={state.proccess} state={state}/>)}
            </div>
            {overflows ?
                <div className="h-full w-10 bg-black">

                </div>:
                null
            }
        </div>
    )
}
export default Dock
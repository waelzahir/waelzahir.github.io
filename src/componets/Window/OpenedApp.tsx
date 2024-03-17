import { useContext, useEffect, useRef, useState } from "react";
import { LoadedProg, windowState } from "../../types/Memory";
import EnvirementContext from "../../Context/EnvirementContext";
import { Envirment } from "../../types/Envirment";
import FileSystemContext from "../../Context/fileSystem";
import MemProviderContext from "../../Context/MemContext";
import { Progtype, file } from "../../types/file";
import { FolderComp } from "./OpenAppComp/FolderComp";
type sizes = {
    left:number,
    top:number,
    width:number,
    height:number
} 
const def :sizes = {
    height:0,
    left:0,
    top:0,
    width:0
}
const getcurrentdimentions = ( ) : sizes =>{
    return (
        {
            top:window.innerHeight / 6,
            left: window.innerWidth / 6,
            height:window.innerHeight / 6 * 4,
            width:window.innerWidth / 6 * 4
        }
    )
}
const GetProcessContent  = (filedada : file, operand:any)=>
{
    switch (filedada.type){
        case Progtype.folder:
            return <FolderComp ids={filedada.content} operand={operand}/>
        case Progtype.text:
            return <>text</>
        case Progtype.github:
            return <>github</>
        default:
                return null
        }
    
}
export const OpenedApp = ({app, operand}:{app : LoadedProg, operand: any}) =>
{
    const ref  = useRef<HTMLDivElement>(null)
    const Env = useContext(EnvirementContext);
    const Filesys = useContext(FileSystemContext)
    const memory = useContext(MemProviderContext)
    const [dimentions, setdimentions] = useState<sizes>(def)
    
    useEffect(() =>{
        if (!ref.current|| !Env)
            return ;
        window.addEventListener("resize", () =>setdimentions(getcurrentdimentions()))
        setdimentions(getcurrentdimentions())
        Env[0].zindex++
        ref.current.style.top = window.innerHeight / 6  + "px"
        ref.current.style.left = window.innerWidth / 6  + "px"
        ref.current.style.zIndex = Env[0].zindex + ""
        Env[1]((env:Envirment) => {
            return {
                Background:env.Background,
                fileid:env.fileid,
                process:env.process,
                zindex:env.zindex
            }
        }) 
        return () =>{
            window.removeEventListener("resize", () =>setdimentions(getcurrentdimentions()))
        }
    },[])
    if (ref.current && app.windowState === windowState.minimized)
    {
        ref.current.style.top = dimentions.top  + "px"
        ref.current.style.left = dimentions.left   + "px"
        ref.current.style.width = dimentions.width  + "px"
        ref.current.style.height = dimentions.height  + "px"
    }
    const filedata = Filesys ? Filesys[0].get(app.loadedFile) : null
    if (!filedata || !memory || app.windowState === windowState.reduced)
        return null

    return (
        <div ref={ref} className="absolute h-96 w-96 bg-purple-500 rounded flex flex-col">
            <div className="w-full h-11 bg-purple-800 rounded flex flex-row ">
                <div className="flex-1 h-full flex justify-center items-center text-xl font-egoist font-bold">
                    {filedata.name}
                </div>
                <div className="w-24 h-full flex flex-row justify-around items-center ">
                        <div
                        onClick={() =>{
                            memory[1]((execs: Map<number, LoadedProg>) => {
                                app.windowState = windowState.reduced
                                execs.set(app.process, app)
                                return new Map(execs)
                            })
                        }} 
                        className="bg-green-600 w-4 h-4 hover:w-7 rounded-full cursor-pointer " >

                        </div>
                        <div className="bg-yellow-600 w-4 h-4 hover:w-7 rounded-full cursor-pointer">

                        </div>
                        <div 
                        onClick={() =>{
                            memory[1]((execs: Map<number, LoadedProg>) => {
                                execs.delete(app.process)
                                return new Map(execs)
                            })
                    }} 
                        className="bg-red-600 w-4 h-4 hover:w-7 rounded-full cursor-pointer">
                    </div>
                </div>
            </div>
                {GetProcessContent(filedata, operand)}
        </div>
    )
}
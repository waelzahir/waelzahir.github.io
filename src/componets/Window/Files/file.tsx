import { useContext, useEffect, useRef, useState } from "react";
import { Progtype, file } from "../../../types/file";
import { GitProject } from "../../../types/gitProject";
import Folder from "../../../assets/Folder.svg"
import MemProviderContext from "../../../Context/MemContext";
import customEvent from "../../../utils/CustomEventHandler";
import FileSystemContext from "../../../Context/fileSystem";
import { LoadedProg, windowState } from "../../../types/Memory";
import EnvirementContext from "../../../Context/EnvirementContext";
import { Envirment } from "../../../types/Envirment";
const GetSrc = (lang:string) =>
{
    switch (lang){
        case "C":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg"
        case "C++":
                return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg"
        case "Java":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg"
        case "Python":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        case "PHP":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg"
        case "TypeScript":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
        case "Shell":
                return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg"
        case "HTML":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"
        default:
            return "";
    }            
}
const geticon = (type: Progtype) =>{
    switch (type)
    {
        case Progtype.folder:
            return Folder;
        default :
            return null
    }
}

const getProgMem = (fileid:number, process:number) : LoadedProg=>{
 
    return {
        loadedFile:fileid,
        process:process,
        windowState: windowState.minimized 
    }
}
const handleClick  = (e : any, file:file  , operand :[file | null, React.Dispatch<React.SetStateAction<file | null>>], Memory:any, enviro:[Envirment, React.Dispatch<React.SetStateAction<Envirment>>] | null) =>
{
    e.preventDefault();
    e.stopPropagation()
    const menu = document.getElementById("CONTEXTMENU")
    if (!menu || !enviro )
        return ;
    if (!menu.classList.contains("hidden"))
        menu.classList.add("hidden")
    if (operand[0] && operand[0].id == file.id)
    {
            Memory[0].set(file.id, getProgMem(file.id, enviro[0].process))   
            enviro[1]((env: Envirment) => {
                let p = env.process + 1
                return {
                    zindex:env.zindex,
                    Background:env.Background,
                    fileid:env.fileid,
                    process:p
                }
            })     
            Memory[1](new Map(Memory[0]))
            operand[1](null)
        return ;
    }
    operand[1](file)
}

const HandleContext  = (e:any,  file:file  , operand :[file | null, React.Dispatch<React.SetStateAction<file | null>>]) =>
{
    e.preventDefault();
    e.stopPropagation();
    operand[1](file)
    customEvent.invoke("FILECONTEXT")
    const menu = document.getElementById("CONTEXTMENU")
    if (!menu)
        return ;
    if (menu.classList.contains("hidden"))
        menu.classList.remove("hidden")
    menu.style.left = e.clientX + "px"
    menu.style.top = e.clientY + "px"

}
const FileIcon = ({file, operand}: {file: file | undefined, operand :[file | null, React.Dispatch<React.SetStateAction<file | null>>]}) => {
    const elem = useRef<HTMLDivElement>(null)
    const Memory = useContext(MemProviderContext)
    const fileSystem = useContext(FileSystemContext)
    const enviro = useContext(EnvirementContext)
    if (file == undefined)
        return null
    useEffect(() =>{
        if (!elem.current || !fileSystem)
            return 
        file.cordinates = {
            left: elem.current.getBoundingClientRect().left,
            top: elem.current.getBoundingClientRect().top,
        }
        fileSystem[1]((files: Map<number, file>) => new Map(files.set(file.id, file)) )
        
    }, [])
    console.log("StoreFIle Cords", file)
    const icon = file.type ===Progtype.github ? GetSrc((file.content as GitProject).language) : geticon(file.type)
   
    return (
        <div ref={elem} onClick={(e:any) => handleClick(e, file, operand, Memory, enviro)} onContextMenu={(e:any) =>HandleContext(e,file, operand)}  className={` ${ operand[0] && operand[0].id === file.id ? "bg-violet-600" : ""} w-20 h-30 flex flex-col items-center absolute ml-6 mt-6`} >
            <img className="w-16 h-16" src={icon} />
            <h1 className="w-full text-center">{file.name}</h1>
         
        </div>
    );
};

export default FileIcon

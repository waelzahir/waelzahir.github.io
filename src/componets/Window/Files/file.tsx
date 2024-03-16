import { useContext, useRef, useState } from "react";
import { Progtype, file } from "../../../types/file";
import { GitProject } from "../../../types/gitProject";
import Folder from "../../../assets/Folder.svg"
import MemProviderContext from "../../../Context/MemContext";
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
const handleClick  = (e : any, file:file  , operand :[file | null, React.Dispatch<React.SetStateAction<file | null>>], Memory:any) =>
{
    e.preventDefault();
    e.stopPropagation()
    if (operand[0] && operand[0].id == file.id)
    {
            // loadProgramTomemory();
            operand[1](null)
        return ;
    }
    operand[1](file)
}
const HandleContext  = (e:any) =>
{
    e.preventDefault();
    e.stopPropagation();
}
const FileIcon = ({file, operand}: {file: file | undefined, operand :[file | null, React.Dispatch<React.SetStateAction<file | null>>]}) => {
    const Memory = useContext(MemProviderContext)
    if (file == undefined)
    return null
    const icon = file.type ===Progtype.github ? GetSrc((file.content as GitProject).language) : geticon(file.type)
   
    return (
        <div onClick={(e:any) => handleClick(e, file, operand, Memory)} onContextMenu={(e:any) =>HandleContext(e,)}  className={` ${ operand[0] && operand[0].id === file.id ? "bg-violet-600" : ""} w-20 h-20 flex flex-col items-center`} >
            <img className="w-16 h-16" src={icon} />
            <h1 className="w-full text-center">{file.name}</h1>
         
        </div>
    );
};

export default FileIcon

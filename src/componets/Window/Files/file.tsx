import { useRef } from "react";
import { file } from "../../../types/file";
import { GitProject } from "../../../types/gitProject";
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
const FileIcon = ({file}: {file: file}) => {
    const refer = useRef<HTMLDivElement>(null);
    console.log("")
    return (
        <div ref={refer} className="w-20 h-20 flex flex-col justify-center items-center">
            <img className="w-10 h-10 flex justify-center items-center" src={GetSrc((file.content as GitProject).language)} />
            <h1 className="w-full truncate">{file.name}</h1>
        </div>
    );
};

export default FileIcon

import { useContext, useState } from "react"
import MemProviderContext from "../../Context/MemContext"
import FileSystemContext from "../../Context/fileSystem"

import FileIcon from "./Files/file"
import { file } from "../../types/file"
import { ContextMenu } from "./ContextMenues"
import Dock from "../Dock"
import customEvent from "../../utils/CustomEventHandler"
import { OpenedApp } from "./OpenedApp"


const WindowIcons= (FileSystem:any, operand: [file | null, React.Dispatch<React.SetStateAction<file | null>>])=>
{
    const  root = (FileSystem[0] as Map<number, file>).get(0);
    if (root)
        return (root.content as number []).map((fid: number, key) => <FileIcon  operand={operand} key={key} file={(FileSystem[0] as Map<number, file>).get(fid)}/>)
    return null
}

const HandleContext  = (e:any, operand:any) =>
{
    e.preventDefault();
    e.stopPropagation();
    operand[1](null)
    customEvent.invoke("WINDOWCONTEXT")
    const menu = document.getElementById("CONTEXTMENU")
    if (!menu)
        return ;
    if (menu.classList.contains("hidden"))
        menu.classList.remove("hidden")
    menu.style.left = e.clientX + "px"
    menu.style.top = e.clientY + "px"

}
const handleClick = (operand:any) =>
{
    operand[1](null)
    const menu = document.getElementById("CONTEXTMENU")
    if (!menu)
        return ;
    if (!menu.classList.contains("hidden"))
        menu.classList.add("hidden")
}
const Window = () => {
    const Memory = useContext(MemProviderContext)
    const FileSystem = useContext(FileSystemContext)
    const operand = useState<file | null>(null)
    if (!Memory || !FileSystem)
        return null;
    const  Programs = Array.from(Memory[0]).map(([, value]) => <OpenedApp  key={value.process} app={value} />)

    console.log("memory", Memory[0])
    return (
        <div id="Desktop" onClick={() => handleClick(operand) } onContextMenu={(e:any) => HandleContext(e, operand)} className="w-full h-full flex-1">
            {Programs}
            {WindowIcons(FileSystem, operand)}
            <ContextMenu />
            <Dock />

        </div>
    )
}




export default Window
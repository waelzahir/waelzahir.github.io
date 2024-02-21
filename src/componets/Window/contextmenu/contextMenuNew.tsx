import { useEffect, useRef } from "react"
import { file, filetype, icon } from "../../../types/ProgramType"
import { highestid } from "../../../App"
import { statedef } from "../../../Metadata/projects"
import { contextx, contexty } from "../Window"


const newFolder = (setters:any) => {
    const file: file = {
        parent:0,
        level:0,

        id:highestid.id,
        name: "new Folder",
        content: new Array(),
        description: "empty Folder",
        icon: icon.Folder,
        type: filetype.Folder,
        visibilityindex: -1,
        windowState: statedef
    }
    file.windowState.left = contextx
    file.windowState.top= contexty
    localStorage.setItem(file.id.toString(), JSON.stringify(file))
    setters.SetFileSystem((fileSystem: file[]) => {fileSystem.push(file);return fileSystem.slice()})
    highestid.id++;
    setters.ContextMenu(false)
}
const newFile = (setters:any) =>
{
    const text: file = {
        id:highestid.id,
        parent:0,
        level:0,
        name: "untitled text",
        content: "",
        description: "untitled text",
        icon: icon.Text,
        type: filetype.Text,
        visibilityindex: -1,
        windowState: statedef
    }
    text.windowState.left = contextx
    text.windowState.top= contexty
    localStorage.setItem(text.id.toString(), JSON.stringify(text))
    setters.SetFileSystem((fileSystem: file[]) => {fileSystem.push(text);return fileSystem.slice()})
    setters.ContextMenu(false)
    highestid.id++
}
const handleclick = (e:any, setters:any) => {
    e.stopPropagation()
    e.preventDefault()  
    if (e.target.classList.contains("NewFolder"))
        newFolder(setters);
    if (e.target.classList.contains("NewFile"))
        newFile(setters);
}
const ContextMenuNewMenu= ({ setters}: { setters:any}) =>{
    const newoption = useRef<HTMLDivElement>(null)
    useEffect(() => {

        newoption.current?.addEventListener("click", (e) => handleclick(e, setters))
        return () =>{
            newoption.current?.removeEventListener("click", (e) => handleclick(e, setters))
        }
    }, [])
    return (
        <div ref={newoption} id="NewOption" className={`hidden absolute  bg-contextMenu w-44  flex flex-col items-center border-[1px] border-Contextborder font-tahoma z-[51]`}>
            <div className="w-full  flex justify-center items-center h-8 hover:bg-ContextSelection">
                <h1  className="w-[90%] NewFolder">
                    Folder
                </h1>
            </div>
            <div className="w-full flex justify-center items-center h-8  hover:bg-ContextSelection">
                <h1  className="w-[90%] NewFile">
                    Text File
                </h1>
            </div>
        </div>
    )
}

export default ContextMenuNewMenu
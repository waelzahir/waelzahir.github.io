import { useContext, useEffect, useRef, useState } from "react"




import { file} from "../../types/ProgramType"
import ContextMenu from "./contextmenu/ConextMenu"
import ContextMenuNewMenu from "./contextmenu/contextMenuNew"
import ContextMenuViewMenu from "./contextmenu/contextMenuView"
import FileContextMenu from "./FilecontextMenu/FileContextMenu"
import ProgramIcon from "./Files/file"
import RenameFile from "./FilecontextMenu/RenameFile"
import MemProviderContext from "../../Context/MemContext"
import { ProgramState } from "../../types/ProgramState"
import Windows from "./Windows/Windows"
import FileSystemContext from "../../Context/fileSystem"
import { getFilesfromID } from "../../utils/Recursivefordel"
export var contextx = 0
export var contexty = 0

const HandleContext = ( e:any, settcoxtmenu:any) =>
{
    e.stopPropagation()
    e.preventDefault()
    contextx = e.clientX 
    contexty = e.clientY
    settcoxtmenu(false)
    setTimeout(() => {
        settcoxtmenu(true)
    }, 0)
    const menu = document.getElementById("filecontex") ;

    if (menu && !menu.classList.contains("hidden"))
        menu.classList.add("hidden")
    const rename = document.getElementById("FileRename") ;
        if (rename && !rename.classList.contains("hidden"))
            rename.classList.add("hidden")
}
const Window  = ({FileSystem, SetFileSystem} : {FileSystem:Map<number, file>, SetFileSystem:any}) =>
{
    const Memory = useContext(MemProviderContext)
    
    const winref = useRef<HTMLDivElement>(null)
    const [size, setsize] = useState(1)
    const [contextMenu, setContextMenu] = useState(false)
    const [operand, setoperand] = useState<file  | null>(null) 
    const [clipboard, setClipboard] = useState<file  | null>(null)

    useEffect(() => {
        if (!winref.current)
            return ;
        winref.current.addEventListener("click", (e:any) => {
            setContextMenu(false);
            const menu = document.getElementById("filecontex") ;
            
            if (menu && !menu.classList.contains("hidden"))
            menu.classList.add("hidden")
            const rename = document.getElementById("FileRename") ;
            if (rename && !rename.classList.contains("hidden"))
                rename.classList.add("hidden")
            if(e.target.id === "Desktop")
                setoperand(null)

            const startmenu = document.getElementById("startmenu")
            if (startmenu && !startmenu.classList.contains("hidden"))
                startmenu.classList.add("hidden")

    })
        winref.current.addEventListener("contextmenu", (e) => HandleContext( e,  setContextMenu))

        return () =>
        {
            if (!winref.current)
                return ;
                winref.current.removeEventListener("click", () => setContextMenu(false))
                winref.current.removeEventListener("contextmenu", (e) => HandleContext(e,  setContextMenu))        
        }
    },[])
    return (
        <FileSystemContext.Provider value={[FileSystem, SetFileSystem]}>
        <div ref={winref}  className="w-full h-full overflow-hidden  flex items-center">
            <div id="Desktop" className="w-full h-full overflow-hidden">
            {
                Memory && Memory[0].length ? Memory[0].map((state: ProgramState) => <Windows key={state.proccess} clipboard={clipboard} setClipboard={setClipboard} state={state}/>) : null
            }
            {
                getFilesfromID(FileSystem.get(0)?.content , FileSystem).map((element: file) => (
                <ProgramIcon menu={setContextMenu} key={element.id} entries={element} operand={operand} setoperand={setoperand} size={size} />
                ))}
            {
                contextMenu ? <>
                    <ContextMenuNewMenu   setters={{ContextMenu: setContextMenu, SetFileSystem:SetFileSystem}}/>
                    <ContextMenuViewMenu  setter={setsize}/>
                    <ContextMenu  clipboard={clipboard} setClip={setClipboard}/>
                </>
                :null
            }
            <FileContextMenu SetFileSystem={SetFileSystem} setClipboard={setClipboard} operand={operand}  setoperand={setoperand}/>
            <RenameFile SetFileSystem={SetFileSystem} operand={operand} setoperand={setoperand} />
            </div>
        </div>
        </FileSystemContext.Provider>
    )
}





export default Window
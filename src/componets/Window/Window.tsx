import { useEffect, useRef, useState } from "react"




import { file} from "../../types/ProgramType"
import ContextMenu from "./contextmenu/ConextMenu"
import ContextMenuNewMenu from "./contextmenu/contextMenuNew"
import ContextMenuViewMenu from "./contextmenu/contextMenuView"
import FileContextMenu from "./FilecontextMenu/FileContextMenu"
import ProgramIcon from "./Files/file"
import RenameFile from "./FilecontextMenu/RenameFile"
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
}
const Window  = ({FileSystem, SetFileSystem} : {FileSystem:file [], SetFileSystem:any}) =>
{
    
    const winref = useRef<HTMLDivElement>(null)
    const [size, setsize] = useState(1)
    const [contextMenu, setContextMenu] = useState(false)
    const [clipboard, setClipboard] = useState<file  | null>(null)

    useEffect(() => {
        if (!winref.current)
            return ;
        winref.current.addEventListener("click", () => {
            setContextMenu(false);
            const menu = document.getElementById("filecontex") ;
 
            if (menu && !menu.classList.contains("hidden"))
                menu.classList.add("hidden")
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
        <div ref={winref} id="Desktop" className="w-full h-full overflow-hidden  flex items-center">
            <div className="w-full h-full overflow-hidden">

            {FileSystem.map((element: file) => (
                <ProgramIcon menu={setContextMenu} key={element.id} entries={element} SetFileSystem={SetFileSystem} size={size} />
                ))}
            {
                contextMenu ? <>
                    <ContextMenuNewMenu  setters={{ContextMenu: setContextMenu, SetFileSystem:SetFileSystem}}/>
                    <ContextMenuViewMenu  setter={setsize}/>
                    <ContextMenu  />
                </>
                :null
            }
            <FileContextMenu SetFileSystem={SetFileSystem} setClipboard={setClipboard} />
            <RenameFile SetFileSystem={SetFileSystem} />
            </div>
        </div>
    )
}





export default Window
import { useEffect, useRef, useState } from "react"


import closedIcon from "../../assets/FolderClosed.png"
import Internet from "../../assets/Internet.png"
import Explorer from "../../assets/Expolorer.png"
import text from "../../assets/text.png"
import Trash from "../../assets/trash.png"

import { file,icon } from "../../types/ProgramType"
import { FileHandler } from "./FileHandler"
import ContextMenu from "./contextmenu/ConextMenu"
import ContextMenuNewMenu from "./contextmenu/contextMenuNew"
import ContextMenuViewMenu from "./contextmenu/contextMenuView"
export var contextx = 0
export var contexty = 0

const HandleContext = ( e:any, settcoxtmenu:any) =>
{
    e.stopPropagation()
    e.preventDefault()
    contextx = e.clientX 
    contexty = e.clientY
    console.log(contextx, contexty , "desktop")
    settcoxtmenu(false)
    setTimeout(() => {
        settcoxtmenu(true)
    }, 0)
}
const Window  = ({FileSystem, SetFileSystem} : {FileSystem:file [], SetFileSystem:any}) =>
{
    const winref = useRef<HTMLDivElement>(null)
    const [size, setsize] = useState(1)
    const [contextMenu, setContextMenu] = useState(false)

    useEffect(() => {
        if (!winref.current)
            return ;
        winref.current.addEventListener("click", (e) => setContextMenu(false))
        winref.current.addEventListener("contextmenu", (e) => HandleContext( e,  setContextMenu))

        return () =>
        {
            if (!winref.current)
                return ;
                winref.current.removeEventListener("click", (e) => setContextMenu(false))
                winref.current.removeEventListener("contextmenu", (e) => HandleContext(e,  setContextMenu))        
        }
    },[])
      
    
    return (
        <div ref={winref} id="Desktop" className="w-full h-full overflow-hidden  flex items-center">
            {FileSystem.map((element: file, index: number) => (
                    <GenerateEntries key={element.id} entries={element} index={index} size={size} />
                ))}
            {
                contextMenu ? <>
                    <ContextMenuNewMenu  setters={{    setters: setContextMenu, SetFileSystem:SetFileSystem}}/>
                    <ContextMenuViewMenu  setter={setsize}/>
                    <ContextMenu  />
                </>
                :null
            }
        </div>
    )
}



const SmallRightClick =  (e: Event) => {
    e.stopPropagation()
    alert("file click")
} 

const GenerateEntries = ({ entries, index, size }: { entries: file, index: number, size: number }) => {
    const refer = useRef<HTMLDivElement>(null);
    const click = useState<boolean>(false)

    useEffect(() => {
        if (!refer.current)
            return
        const handler = new FileHandler(refer.current, entries, {})
        return () =>
        {
            handler.removerLisners()
        }
        }, []);
    const icon = getIcon(entries.icon);
    const fited = size === 1 ? 56 : size === 2 ? 70 : 90;

    return (
        <div ref={refer} className="absolute overflow-hidden w-20 h-20 flex flex-col items-center  hover:bg-blue-200 rounded z-50" style={{ height: `${80 + size * 10}px` }}>
            <div className="w-full   flex justify-center items-center">
                <img style={{ height: `${fited}px` }} src={icon} alt={entries.name} />
            </div>
            <div>
                <h1 className="text-start font-tahoma text-xs font-bold text-black">{entries.name}</h1>
            </div>
        </div>
    );
};
const getIcon  = (ico: icon) => {
    switch (ico)
    {
        case icon.Folder:
            return closedIcon;
        case icon.Internet:
            return Internet;
        case icon.Explorer:
            return Explorer
        case icon.Text:
                return text;
        case icon.Trash:
            return Trash
        default :
            return null;
    }
}

export default Window
import { useEffect, useRef, useState } from "react"


import closedIcon from "../../assets/FolderClosed.png"
import Internet from "../../assets/Internet.png"
import Explorer from "../../assets/Expolorer.png"
import text from "../../assets/text.png"



import { file, filetype, icon, state } from "../../types/ProgramType"
import { statedef } from "../../Metadata/projects"
import { highestid } from "../../App"
import { FileHandler } from "./FileHandler"


var contextx = 0
var contexty = 0
const ContextMenuNewMenu= ({activated}: {activated: boolean}) =>{
    return (
        <div id="NewOption" className={`${activated ? "": "hidden"} absolute  bg-contextMenu w-44  flex flex-col items-center border-[1px] border-Contextborder font-tahoma`}>
            <div className="w-full  flex justify-center items-center h-8 hover:bg-ContextSelection">
                <h1 id="NewFolder" className="w-[90%]">
                    Folder
                </h1>
            </div>
            <div className="w-full flex justify-center items-center h-8  hover:bg-ContextSelection">
                <h1 id="NewFile" className="w-[90%]">
                    Text File
                </h1>
            </div>
        </div>
    )
}
const ContextMenuSortMenu= ({activated}: {activated: boolean}) =>{
    return (
        <div id="SortOption" className={`${activated ? "": "hidden"} absolute  bg-contextMenu w-44  flex flex-col items-center border-[1px] border-Contextborder font-tahoma`}>
            <div className="w-full  flex justify-center items-center h-8 hover:bg-ContextSelection">
                <h1 id="filename" className="w-[90%]">
                    Name
                </h1>
            </div>
            <div className="w-full  flex justify-center items-center h-8 hover:bg-ContextSelection">
                <h1 id="filenamerev" className="w-[90%]">
                    Name Reverse
                </h1>
            </div>
            <div className="w-full flex justify-center items-center h-8  hover:bg-ContextSelection">
                <h1 id="filetype" className="w-[90%]">
                    type
                </h1>
            </div>
        </div>
    )
}
const ContextMenuViewMenu= ({activated}: {activated: boolean}) =>{
    return (
        <div id="ViewOption" className={`${activated ? "": "hidden"} absolute  bg-contextMenu w-44  flex flex-col items-center border-[1px] border-Contextborder font-tahoma`}>
            <div className="w-full  flex justify-center items-center h-8 hover:bg-ContextSelection">
                <h1 id="Small" className="w-[90%]">
                    Small
                </h1>
            </div>
            <div className="w-full flex justify-center items-center h-8  hover:bg-ContextSelection">
                <h1 id="Medium" className="w-[90%]">
                    Medium
                </h1>
            </div>
            <div className="w-full flex justify-center items-center h-8  hover:bg-ContextSelection">
                <h1 id="Large" className="w-[90%]">
                    Large
                </h1>
            </div>
        </div>
    )
}
const ContextMenu = ({activated}: {activated: boolean}) => {
  
    return (
        <div id="ContextMenu" className={`${activated ? "" : "hidden"} w-64  bg-contextMenu absolute border-[1px] border-Contextborder flex flex-col items-center font-tahoma`}>
                <div className="w-full flex flex-col justify-around h-20 items-center">
                    <div id="ContextMenuViewButton" className="w-[99%] h-8 flex flex-row justify-between items-center hover:bg-ContextSelection">
                        <h1 className="pl-4">View</h1>
                        <div className="pr-2 w-0 h-0  border-t-[5px] border-t-transparent border-l-[5px] border-l-black border-b-[5px] border-b-transparent"></div>
                    </div>
                    <h1 className="w-full h-8 pl-4 text-gray-500">Refresh</h1>
                </div>
                <div className="h-1 w-[95%]  border-t-2 border-Contextborder"></div>
                <div className="w-full flex flex-col justify-around h-16">
                    <h1 className="pl-4  text-gray-500">Paste</h1>
                    <h1 className="pl-4  text-gray-500">Terminal</h1>
                </div>
                <div className="h-1 w-[95%]  border-t-2 border-Contextborder"></div>
                <div className="w-full h-8 flex items-center justify-center">
                    <div id="ContextMenuNewButton"  className="w-full flex h-8 flex-row justify-between items-center  hover:bg-ContextSelection border-[1px] border-contextMenu">
                        <h1 className="pl-4">New</h1>
                        <div className="pr-2 w-0 h-0  border-t-[5px] border-t-transparent border-l-[5px] border-l-black border-b-[5px] border-b-transparent"></div>
                    </div>
                </div>
                <div className="h-1 w-[95%]  border-t-2 border-Contextborder"></div>
                <div className="w-full h-10 flex items-center border-[1px] border-contextMenu  hover:bg-ContextSelection">
                        <h1 className="ml-4 ">Personalize</h1>
                </div>
        </div>
    )
}
const Apply = (e:any, element: HTMLElement | null, setters:any) =>{
    if (!element)
        return 
    switch (e.target.id){
        case "Desktop":
            contextx = e.clientX 
            contexty = e.clientY
            const ContextMenu = document.getElementById("ContextMenu");
            if (!ContextMenu)
                break ;
            setters.NewMenu(false)
            setters.ContextMenu(false)
            setters.setcontextMenuView(false)
            ContextMenu.style.left = `${e.clientX + ContextMenu.offsetWidth < element?.offsetWidth ? e.clientX :  element?.offsetWidth - ContextMenu.offsetWidth}px`
            ContextMenu.style.top = `${e.clientY + ContextMenu.offsetHeight < element?.offsetHeight ? e.clientY :  element?.offsetHeight - ContextMenu.offsetHeight}px`        
            setTimeout(() => setters.ContextMenu(true), 0)
            break;
        case "ContextMenuNewButton":
            setters.NewMenu(true)
            setters.setcontextMenuView(false)
            const NewMenu = document.getElementById("NewOption");
            if (!NewMenu)
                break ;
            NewMenu.style.left = `${element.getBoundingClientRect().left + element.offsetWidth + NewMenu.offsetWidth < window.innerWidth ? element.getBoundingClientRect().left + element.offsetWidth  - 5: element.getBoundingClientRect().left - NewMenu.offsetWidth + 5}px`
            NewMenu.style.top = `${element.getBoundingClientRect().top}px`
            break;
        case "ContextMenuViewButton":
            setters.setcontextMenuView(true)
            setters.NewMenu(false)
            const ViewMenu = document.getElementById("ViewOption");
            if (!ViewMenu)
                break ;
                ViewMenu.style.left = `${element.getBoundingClientRect().left + element.offsetWidth + ViewMenu.offsetWidth < window.innerWidth ? element.getBoundingClientRect().left + element.offsetWidth  - 5: element.getBoundingClientRect().left - ViewMenu.offsetWidth + 5}px`
                ViewMenu.style.top = `${element.getBoundingClientRect().top}px`
                break;
        case "NewFile":
            const text: file = {
                id:highestid.id,
                parent:0,
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
            setters.NewMenu(false)
            setters.ContextMenu(false)
            highestid.id++
                break;
        case "NewFolder":
            const file: file = {
                parent:0,
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
            setters.NewMenu(false)
            setters.ContextMenu(false)
                break;
        case "Small":
            setters.setsize(1)
                break;
        case "Medium":
            setters.setsize(2)
                break;
        case "Large":
            setters.setsize(3)
                break;
        default:
            return 
    }
}

const GlobalDesktopEvents = (e:any, setters:any) =>
{
  e.stopPropagation()
  e.preventDefault()
  if (!e.target.id.length)
    return
  const element = document.getElementById(e.target.id)    
  console.log(e.target.id)
  if (e.target.id === "Desktop")
  {
      contextx = 0;
      contexty = 0;
  }
  Apply(e, element, setters)
  

}
const Window  = ({FileSystem, SetFileSystem} : {FileSystem:file [], SetFileSystem:any}) =>
{
    const [size, setsize] = useState(1)
    const [contextMenu, setContextMenu] = useState(false)
    const [contextMenuNew, setContextMenuNew] = useState(false)
    const [contextMenuView, setcontextMenuView] = useState(false)
    


    useEffect(() => {
        window.addEventListener("click", (e) => GlobalDesktopEvents(e, {ContextMenu: setContextMenu, NewMenu: setContextMenuNew, SetFileSystem:SetFileSystem , setcontextMenuView:setcontextMenuView, setsize}))

        return () =>
        {
          window.removeEventListener("click", (e) => GlobalDesktopEvents(e, {ContextMenu: setContextMenu, NewMenu: setContextMenuNew, SetFileSystem:SetFileSystem, setcontextMenuView:setcontextMenuView, setsize}))
        }
    },[])
      
    
    return (
        <div  id="Desktop" className="w-full h-full overflow-hidden  flex items-center">
            {FileSystem.map((element: file, index: number) => (
                    <GenerateEntries key={element.id} entries={element} index={index} size={size} />
                ))}
            <ContextMenu activated={contextMenu}/>
            <ContextMenuNewMenu activated={contextMenuNew}/>
            <ContextMenuViewMenu activated={contextMenuView}/>
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
                return text
        default :
            return null;
    }
}

export default Window
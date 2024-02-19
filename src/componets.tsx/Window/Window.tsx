import { useEffect, useRef, useState } from "react"


import closedIcon from "../../assets/FolderClosed.png"
import Internet from "../../assets/Internet.png"
import Explorer from "../../assets/Expolorer.png"
import text from "../../assets/text.png"



import { file, filetype, icon, state } from "../../types/ProgramType"
import { statedef } from "../../Metadata/projects"
import { highestid } from "../../App"



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
                <div className="w-full flex flex-col justify-around h-28 items-center">
                    <div id="ContextMenuViewButton" className="w-[99%] h-8 flex flex-row justify-between items-center hover:bg-ContextSelection">
                        <h1 className="pl-4">View</h1>
                        <div className="pr-2 w-0 h-0  border-t-[5px] border-t-transparent border-l-[5px] border-l-black border-b-[5px] border-b-transparent"></div>
                    </div>
                    <div id="ContextMenuSortButton" className="w-[99%] h-8 flex flex-row justify-between items-center  hover:bg-ContextSelection">
                        <h1 className="pl-4">Sort By</h1>
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
    console.log("here", element, e)
    if (!element)
        return 
    switch (e.target.id){
        case "Desktop":
            const ContextMenu = document.getElementById("ContextMenu");
            if (!ContextMenu)
                break ;
            setters.NewMenu(false)
            setters.setContextMenuSort(false)
            setters.ContextMenu(false)
            setters.setcontextMenuView(false)
            ContextMenu.style.left = `${e.clientX + ContextMenu.offsetWidth < element?.offsetWidth ? e.clientX :  element?.offsetWidth - ContextMenu.offsetWidth}px`
            ContextMenu.style.top = `${e.clientY + ContextMenu.offsetHeight < element?.offsetHeight ? e.clientY :  element?.offsetHeight - ContextMenu.offsetHeight}px`        
            setTimeout(() => setters.ContextMenu(true), 0)
            break;
        case "ContextMenuNewButton":
            setters.NewMenu(true)
            setters.setContextMenuSort(false)
            setters.setcontextMenuView(false)
            const NewMenu = document.getElementById("NewOption");
            if (!NewMenu)
                break ;
            NewMenu.style.left = `${element.getBoundingClientRect().left + element.offsetWidth + NewMenu.offsetWidth < window.innerWidth ? element.getBoundingClientRect().left + element.offsetWidth  - 5: element.getBoundingClientRect().left - NewMenu.offsetWidth + 5}px`
            NewMenu.style.top = `${element.getBoundingClientRect().top}px`
            break;
        case "ContextMenuSortButton":
                setters.setContextMenuSort(true)
                setters.setcontextMenuView(false)
                setters.NewMenu(false)
                const SortMenu = document.getElementById("SortOption");
                if (!SortMenu)
                    break ;
                SortMenu.style.left = `${element.getBoundingClientRect().left + element.offsetWidth + SortMenu.offsetWidth < window.innerWidth ? element.getBoundingClientRect().left + element.offsetWidth  - 5: element.getBoundingClientRect().left - SortMenu.offsetWidth + 5}px`
                SortMenu.style.top = `${element.getBoundingClientRect().top}px`
                break;
        case "ContextMenuViewButton":
            setters.setcontextMenuView(true)
            setters.setContextMenuSort(false)
            setters.NewMenu(false)
            const ViewMenu = document.getElementById("ViewOption");
            if (!ViewMenu)
                break ;
                ViewMenu.style.left = `${element.getBoundingClientRect().left + element.offsetWidth + ViewMenu.offsetWidth < window.innerWidth ? element.getBoundingClientRect().left + element.offsetWidth  - 5: element.getBoundingClientRect().left - ViewMenu.offsetWidth + 5}px`
                ViewMenu.style.top = `${element.getBoundingClientRect().top}px`
                break;
        case "NewFile":
            highestid.id++
            const text: file = {
                id:highestid.id,
                name: "untitled text",
                content: "",
                description: "untitled text",
                icon: icon.Text,
                type: filetype.Text,
                visibilityindex: -1,
                windowState: statedef
            }
            setters.SetFileSystem((fileSystem: file[]) => {
                fileSystem.push(text)
                localStorage.setItem("files", JSON.stringify(fileSystem))
                 return fileSystem.slice()
                })
            setters.NewMenu(false)
            setters.ContextMenu(false)
            break;
        case "filename":
                setters.SetFileSystem((fileSystem: file[]) => {
                    const newfiles = fileSystem.sort((a:file, b:file) => a.name.localeCompare(b.name))
                    localStorage.setItem("files", JSON.stringify(newfiles))
                     return newfiles.slice()
                    })
                    setters.setContextMenuSort(false)
                    setters.ContextMenu(false)
            break;
            case "filenamerev":
                setters.SetFileSystem((fileSystem: file[]) => {
                    const newfiles = fileSystem.sort((a:file, b:file) => b.name.localeCompare(a.name))
                    localStorage.setItem("files", JSON.stringify(newfiles))
                     return newfiles.slice()
                    })
                    setters.setContextMenuSort(false)
                    setters.ContextMenu(false)
            break;
            case "filetype":
                setters.SetFileSystem((fileSystem: file[]) => {
                    const newfiles = fileSystem.sort((a:file, b:file) => a.type.localeCompare(b.type))
                    localStorage.setItem("files", JSON.stringify(newfiles))
                     return newfiles.slice()
                    })
                    setters.setContextMenuSort(false)
                    setters.ContextMenu(false)
            break;
            case "NewFolder":
                highestid.id++;

                const file: file = {
                    id:highestid.id,
                    name: "new Folder",
                    content: new Array(),
                    description: "empty Folder",
                    icon: icon.Folder,
                    type: filetype.Folder,
                    visibilityindex: -1,
                    windowState: statedef
                }
                setters.SetFileSystem((fileSystem: file[]) => {
                    fileSystem.push(file)
                    localStorage.setItem("files", JSON.stringify(fileSystem))
                     return fileSystem.slice()
                    })
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
  const element = document.getElementById(e.target.id)
  Apply(e, element, setters)

}
const Window  = ({FileSystem, SetFileSystem} : {FileSystem:file [], SetFileSystem:any}) =>
{
    const [size, setsize] = useState(1)
    const [contextMenu, setContextMenu] = useState(false)
    const [contextMenuNew, setContextMenuNew] = useState(false)
    const [contextMenuSort, setContextMenuSort] = useState(false)
    const [contextMenuView, setcontextMenuView] = useState(false)


    useEffect(() => {
        window.addEventListener("click", (e) => GlobalDesktopEvents(e, {ContextMenu: setContextMenu, NewMenu: setContextMenuNew, SetFileSystem:SetFileSystem ,setContextMenuSort: setContextMenuSort, setcontextMenuView:setcontextMenuView, setsize}))
        return () =>
        {
          window.removeEventListener("click", (e) => GlobalDesktopEvents(e, {ContextMenu: setContextMenu, NewMenu: setContextMenuNew, SetFileSystem:SetFileSystem,setContextMenuSort: setContextMenuSort, setcontextMenuView:setcontextMenuView, setsize}))
        }
    },[])
      
    
    return (
        <div  id="Desktop" className="w-full bg-red-400 flex flex-1">
            {
                FileSystem.map((element: file, index:number) => generateEntries(element, index , size))
            }
            <ContextMenu activated={contextMenu}/>
            <ContextMenuNewMenu activated={contextMenuNew}/>
            <ContextMenuSortMenu activated={contextMenuSort}/>
            <ContextMenuViewMenu activated={contextMenuView}/>

      
        </div>
    )
}



const SmallRightClick =  (e: Event) => {
    e.stopPropagation()
    e.preventDefault()
    alert("file click")
} 
const generateEntries = (entries: file, index:number, size:number) => {
  
    const icon = getIcon(entries.icon)
    const fited = size==1 ? 56 : size ==2 ? 70 : 90 
    return (
        <div key={entries.id} className="absolute w-20 h-20 flex flex-col items-center justify-between hover:bg-blue-200 rounded" style={{top: `${index*100 +20 }px`, left: `${20 }px` }}>
            <div className="w-full   flex justify-center items-center">
                <img style={{height: `${fited}px`}}src={icon}/>
            </div>
                <h1 className=" text-start font-tahoma text-xs font-bold text-black" >{entries.name}</h1>
        </div>
    )
    
}

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
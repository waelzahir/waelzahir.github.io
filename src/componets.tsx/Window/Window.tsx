import { useEffect, useRef, useState } from "react"
import ReactDOM from 'react-dom/client'
import * as tt from 'react-dom'


import closedIcon from "../../assets/FolderClosed.png"
import Internet from "../../assets/Internet.png"
import Explorer from "../../assets/Expolorer.png"


import { Desktop } from "../../Metadata/projects"
import { file, icon } from "../../types/ProgramType"



const ContextMenuNewMenu= ({activated}: {activated: boolean}) =>{
    return (
        <div id="NewOption" className={`${activated ? "": "hidden"} absolute  bg-contextMenu w-44  flex flex-col items-center border-[1px] border-Contextborder font-tahoma`}>
            <div className="w-full  flex justify-center items-center h-8 hover:bg-ContextSelection">
                <h1 className="w-[90%]">
                    Folder
                </h1>
            </div>
            <div className="w-full flex justify-center items-center h-8  hover:bg-ContextSelection">
                <h1 className="w-[90%]">
                    Text File
                </h1>
            </div>
        </div>
    )
}
const ContextMenu = ({activated}: {activated: boolean}) => {
  
    return (
        <div id="ContextMenu" className={`${activated ? "" : "hidden"} w-64  bg-contextMenu absolute border-[1px] border-Contextborder flex flex-col items-center font-tahoma`}>
                <div className="w-full flex flex-col justify-around h-28 items-center">
                    <div className="w-[99%] h-8 flex flex-row justify-between items-center hover:bg-ContextSelection">
                        <h1 className="pl-4">View</h1>
                        <div className="pr-2 w-0 h-0  border-t-[5px] border-t-transparent border-l-[5px] border-l-black border-b-[5px] border-b-transparent"></div>
                    </div>
                    <div className="w-[99%] h-8 flex flex-row justify-between items-center  hover:bg-ContextSelection">
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
    if (!element)
        return 
    switch (e.target.id){
        case "Desktop":
            const ContextMenu = document.getElementById("ContextMenu");
            if (!ContextMenu)
                break ;
            setters.NewMenu(false)
            setters.ContextMenu(false)
            ContextMenu.style.left = `${e.clientX + ContextMenu.offsetWidth < element?.offsetWidth ? e.clientX :  element?.offsetWidth - ContextMenu.offsetWidth}px`
            ContextMenu.style.top = `${e.clientY + ContextMenu.offsetHeight < element?.offsetHeight ? e.clientY :  element?.offsetHeight - ContextMenu.offsetHeight}px`        
            setTimeout(() => setters.ContextMenu(true), 0)
            break;
        case "ContextMenuNewButton":
            setters.NewMenu(true)
            const NewMenu = document.getElementById("NewOption");
            if (!NewMenu)
                break ;
            console.log(element.offsetWidth + element.getBoundingClientRect().left)
            NewMenu.style.left = `${element.getBoundingClientRect().left + element.offsetWidth + NewMenu.offsetWidth < window.innerWidth ? element.getBoundingClientRect().left + element.offsetWidth  - 5: element.getBoundingClientRect().left - NewMenu.offsetWidth + 5}px`
            NewMenu.style.top = `${element.getBoundingClientRect().top}px`
            console.log(NewMenu)
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
const Window  = () =>
{
    const [contextMenu, setContextMenu] = useState(false)
    const [contextMenuNew, setContextMenuNew] = useState(false)
    useEffect(() => {
        window.addEventListener("click", (e) => GlobalDesktopEvents(e, {ContextMenu: setContextMenu, NewMenu: setContextMenuNew}))
        return () =>
        {
          window.removeEventListener("click", (e) => GlobalDesktopEvents(e, {ContextMenu: setContextMenu, NewMenu: setContextMenuNew}))
        }
    },[])
      
    
    return (
        <div  id="Desktop" className="w-full bg-red-400 flex flex-1">
            {
                Desktop.map((element: file, index:number) => generateEntries(element, index))
            }
            <ContextMenu activated={contextMenu}/>
            <ContextMenuNewMenu activated={contextMenuNew}/>
      
        </div>
    )
}



const SmallRightClick =  (e: Event) => {
    e.stopPropagation()
    e.preventDefault()
    alert("file click")
} 
const generateEntries = (entries: file, index:number) => {
    const element = useRef<HTMLDivElement>(null)
    const [left, setLeft] = useState(20);
    const [top, setTop] = useState( index*100 +20 )
    useEffect(() => {
        element.current?.addEventListener("contextmenu", SmallRightClick )
        return () => {
            element.current?.removeEventListener("contextmenu", SmallRightClick )

        }
    })
    const icon = getIcon(entries.icon)
    return (
        <div ref={element} className="absolute w-20 h-20 flex flex-col items-center justify-between hover:bg-blue-200 rounded" style={{top: `${top}px`, left: `${left}px`}}>
            <div className="w-full   flex justify-center items-center">
                <img className="  h-14 " src={icon}/>
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
        default :
            return null;
    }
}

export default Window
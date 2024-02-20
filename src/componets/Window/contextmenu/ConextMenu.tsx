import { useEffect, useState } from "react";
import ContextMenuNewMenu from "./contextMenuNew";
import ContextMenuViewMenu from "./contextMenuView";
import { contextx, contexty } from "../Window";

const ContextMenu = () => {  
    useEffect(() =>{

        const desktop = document.getElementById("Desktop");
        const ContextMenu = document.getElementById("ContextMenu");
        const menu = document.getElementById("filecontex") ;

        if (!ContextMenu || !desktop )
            return ;
        ContextMenu.style.left = `${contextx + ContextMenu.offsetWidth < desktop?.offsetWidth ? contextx :  desktop?.offsetWidth - ContextMenu.offsetWidth}px`
        ContextMenu.style.top = `${contexty + ContextMenu.offsetHeight < desktop?.offsetHeight ? contexty :  desktop?.offsetHeight - ContextMenu.offsetHeight}px`
        ContextMenu.classList.remove("hidden")

      
        const elem = document.getElementById("ContextMenuNewButton")
        const elem2 = document.getElementById("ContextMenuViewButton")
        const ViewMenu = document.getElementById("ViewOption");
        const NewMenu = document.getElementById("NewOption");
        if (!elem|| !elem2 || !ViewMenu || !NewMenu)
            return 
        elem.addEventListener("click", (e) => {
            e.stopPropagation()
            e.preventDefault()
            NewMenu.style.left = `${elem.getBoundingClientRect().left + elem.offsetWidth + NewMenu.offsetWidth < window.innerWidth ? elem.getBoundingClientRect().left + elem.offsetWidth  - 5: elem.getBoundingClientRect().left - NewMenu.offsetWidth + 5}px`
            NewMenu.style.top = `${elem.getBoundingClientRect().top}px`
            NewMenu.classList.remove("hidden")
            if (!ViewMenu.classList.contains("hidden"))
                ViewMenu.classList.add("hidden")
        })
        elem2.addEventListener("click", (e) => {
            e.stopPropagation()
            e.preventDefault()   
            ViewMenu.style.left = `${elem2.getBoundingClientRect().left + elem2.offsetWidth + ViewMenu.offsetWidth < window.innerWidth ? elem2.getBoundingClientRect().left + elem2.offsetWidth  - 5: elem2.getBoundingClientRect().left - ViewMenu.offsetWidth + 5}px`
            ViewMenu.style.top = `${elem2.getBoundingClientRect().top}px`
            ViewMenu.classList.remove("hidden")
            if (!NewMenu.classList.contains("hidden"))
                NewMenu.classList.add("hidden")
        })

    })
 
    return (
        <div id="ContextMenu" className={` hidden w-64   bg-contextMenu absolute border-[1px] border-Contextborder flex flex-col items-center font-tahoma z-[50]`} >
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
                    <div  id="ContextMenuNewButton"  className="w-full flex h-8 flex-row justify-between items-center  hover:bg-ContextSelection border-[1px] border-contextMenu">
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

export default ContextMenu;
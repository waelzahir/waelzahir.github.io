import { useEffect, useRef, useState } from "react"
import { SideBar } from "./SideBar/SideBar"
import { Window } from "./Window/Window"


export const MainComp = () =>
{
    const [width, setwidth] = useState(window.innerWidth  / 6)

    useEffect(() => {
            let mainclicked = false;
            document.getElementById("sdresize")?.addEventListener("mousedown", () => mainclicked = true)
            window.addEventListener("mouseup", () => mainclicked = false)
            window.addEventListener("mousemove", (e) =>
            {
                if (mainclicked)
                setwidth(e.clientX)
            })  
            return () =>
            {
                document.getElementById("sdresize")?.removeEventListener("mousedown", () => mainclicked = true)
                window.removeEventListener("mouseup", () => mainclicked = false)
                window.removeEventListener("mousemove", () =>
                {
                    if (mainclicked)
                    console.log("main clicked")
                })     
                }
        }, [])
    return (
        <div id="maincomp" className="w-full h-full bg-slate-500 flex flex-row">
            <SideBar  width={width}/>
            <div id='sdresize' className="w-1 h-full cursor-col-resize bg-white"></div>
            <Window />
        </div>
    )
}
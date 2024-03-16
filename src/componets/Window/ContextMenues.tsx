import { useEffect, useState } from "react"
import customEvent from "../../utils/CustomEventHandler";

export const ContextMenu = () =>
{
    const contextMenu = useState(0);
    useEffect(() =>{
        customEvent.resgister("WINDOWCONTEXT", () => contextMenu[1](0))
        customEvent.resgister("FILECONTEXT", () => contextMenu[1](1))
        customEvent.resgister("DOCKMENU", () => contextMenu[1](2))
        customEvent.resgister("FOLDERMENU", () => contextMenu[1](2))

        return () =>{
            customEvent.remove("WINDOWCONTEXT")
            customEvent.remove("FILECONTEXT")
            customEvent.remove("DOCKMENU")
            customEvent.remove("FOLDERMENU")

        }
    }, [])
    return (
        <div id="CONTEXTMENU" className=" w-16 h-16 bg-black absolute text-white hidden">
            {contextMenu[0]}
        </div>
    )
}
import { useContext, useEffect, useRef, useState } from "react";
import { LoadedProg, windowState } from "../../types/Memory";
import EnvirementContext from "../../Context/EnvirementContext";
import { Envirment } from "../../types/Envirment";
type sizes = {
    left:number,
    top:number,
    width:number,
    height:number
} 
const def :sizes = {
    height:0,
    left:0,
    top:0,
    width:0
}
const getcurrentdimentions = ( ) : sizes =>{
    return (
        {
            top:window.innerHeight / 6,
            left: window.innerWidth / 6,
            height:window.innerHeight / 6 * 4,
            width:window.innerWidth / 6 * 4
        }
    )
}
export const OpenedApp = ({app}:{app : LoadedProg}) =>
{
    const ref  = useRef<HTMLDivElement>(null)
    const Env = useContext(EnvirementContext);
    const [dimentions, setdimentions] = useState<sizes>(def)
    
    useEffect(() =>{
        if (!ref.current|| !Env)
            return ;
        setdimentions(getcurrentdimentions())
        Env[0].zindex++
        ref.current.style.top = window.innerHeight / 6  + "px"
        ref.current.style.left = window.innerWidth / 6  + "px"
        ref.current.style.zIndex = Env[0].zindex + ""
        Env[1]((env:Envirment) => {
            return {
                Background:env.Background,
                fileid:env.fileid,
                process:env.process,
                zindex:env.zindex
            }
        })  
    },[])
    if (ref.current && app.windowState === windowState.minimized)
    {
        ref.current.style.top = dimentions.top  + "px"
        ref.current.style.left = dimentions.left   + "px"
        ref.current.style.width = dimentions.width  + "px"
        ref.current.style.height = dimentions.height  + "px"
    }
    return (
        <div ref={ref} className="absolute h-96 w-96 bg-violet-900">
            {app.loadedFile}
            {app.process}
        </div>
    )
}
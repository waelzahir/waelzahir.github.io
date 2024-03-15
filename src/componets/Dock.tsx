import { useContext, useEffect, useRef, useState } from "react"
import MemProviderContext from "../Context/MemContext"
import Terminal from "../assets/xterm.svg"

const DockElem = ({state} : {state : any}) =>{

    return (
        <div>
            
        </div>
    )
}

const Dock = ()=>
{
    const Memory = useContext(MemProviderContext)
    if (!Memory)
        return null    
   
    return (
        <div id="dock"  className="min-w-36 bg-green-950/30  h-24 backdrop-blur-sm absolute rounded-3xl  flex flex-row items-center">
            {Memory[0].map((state:any) => <DockElem key={state.proccess} state={state}/>)}
        </div>
    )
}
export default Dock
import { memo, useContext, useEffect, useRef, useState } from "react"
import MemProviderContext from "../Context/MemContext"
import Terminal from "../assets/xterm.svg"

const DockElem = ({state} : {state : any}) =>{

    return (
        <div>
                dock el
        </div>
    )
}

const Dock = ()=>
{
    const Memory = useContext(MemProviderContext)
    if (!Memory)
        return null    
    const  Programs = Array.from(Memory[0]).map(([, value]) => value)

    return (
        <div id="dock"  className="min-w-36 bg-green-950/30  h-24 backdrop-blur-sm absolute rounded-3xl  flex flex-row items-center">
            {Programs.map((state:any) => <DockElem key={state.proccess} state={state}/>)}
        </div>
    )
}
export default Dock
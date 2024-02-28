import { useEffect, useRef } from "react"
import { highestid } from "../App"

const StartMenu =() =>{
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() =>{
        const startbutton = document.getElementById("Start")
        if (!ref.current || !startbutton)
            return 
        ref.current.style.top = (startbutton.getBoundingClientRect().top - 705) + "px" 
        ref.current.style.left = "0px" 
        ref.current.style.width =   "500px" 
        ref.current.style.height = "700px" 
        ref.current.style.zIndex = highestid.zindex.toString()
    }, [])
    return (
    <div id="startmenu" ref={ref} className="hidden absolute flex flex-col bg-black">
        <div id="identity" className=" bg-XpBar flex  justify-center items-center w-full">
            <div className="flex flex-row h-24  w-[90%] items-center gap-x-2 ">
                <img className="border-[2px] rounded border-white w-16 h-16 "  src="https://media.licdn.com/dms/image/D4E03AQFOPtUes_7Fqg/profile-displayphoto-shrink_800_800/0/1671912678224?e=1714608000&v=beta&t=P8BlgpQ6dleim3-QGvMsnPQqdYQtfkAX9nd-g3jFgrw" alt="" />
                <h1 className="font-tahoma text-xl font-semibold text-[#e6f8ff] " >OUAIL ZAHIR</h1>
            </div>
        </div>
        <div>

        </div>

    </div>
    )
}
export default StartMenu
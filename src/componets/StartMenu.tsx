import { useEffect, useRef, useState } from "react"
import { highestid } from "../App"

const StartMenu =() =>{
    const ref = useRef<HTMLDivElement>(null)
    const [resize, setresize ] = useState(false);
    useEffect(() =>{
        const startbutton = document.getElementById("Start")
        if (!ref.current || !startbutton)
            return 
        ref.current.style.top = (startbutton.getBoundingClientRect().top - (window.innerHeight / 3 *2 )- 5) + "px" 
        ref.current.style.left = "0px" 
        ref.current.style.width =   window.innerWidth / 4 + "px"
        ref.current.style.height = window.innerHeight / 3 *2 + "px"
        ref.current.style.zIndex = highestid.zindex.toString()
        highestid.zindex++;
        window.addEventListener("resize",() => setresize(!resize) )
        return () =>{
            window.removeEventListener("resize",() => setresize(!resize) )
        }
    }, [resize])
    return (
    <div id="startmenu" ref={ref} className="hidden absolute flex flex-col">
        <div id="identity" className=" bg-XpBar flex  justify-center items-center w-full">
            <div className="flex flex-row h-20  w-[90%] items-center gap-x-2 ">
                <img className="border-[2px] rounded border-white w-16 h-16 "  src="https://media.licdn.com/dms/image/D4E03AQFOPtUes_7Fqg/profile-displayphoto-shrink_800_800/0/1671912678224?e=1714608000&v=beta&t=P8BlgpQ6dleim3-QGvMsnPQqdYQtfkAX9nd-g3jFgrw" alt="" />
                <h1 className="font-tahoma text-xl font-semibold text-[#e6f8ff] " >OUAIL ZAHIR</h1>
            </div>
        </div>
        <div className="flex flex-row flex-1 border-2 border-[#306eb7]">
            <div className="w-full h-full bg-[#ffffff]">

            </div>
            <div className=" h-full  border-l-2 w-80 bg-[#d3e5fb] border-[#a4b9d4]">

            </div>
        </div>
            <div className="flex flex-row h-14  w-full items-center gap-x-2  bg-XpBar">
                
            </div>

    </div>
    )
}
export default StartMenu
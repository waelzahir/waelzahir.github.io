import { useEffect, useRef } from "react"
import { ProgramState } from "../../../types/ProgramState"
import { highestid } from "../../../App"
import Exit from "../../../assets/Exit.png"
import Maximize from "../../../assets/Maximize.png"
import Minimize from "../../../assets/Minimize.png"
import { getIcon } from "../Files/file"


const Windows = ({state}:{state :ProgramState}) =>
{
    const winref = useRef<HTMLDivElement>(null)
    useEffect(() => {
            if (!winref.current)
                return 
            state.screen.x = ((window.innerWidth / 2) - 250 )
            state.screen.y = ((window.innerHeight / 2) - 250 )
            winref.current.style.top = state.screen.y.toString() +"px"
            winref.current.style.left = state.screen.x.toString() +"px"
            winref.current.style.width = state.screen.width.toString() + "px"
            winref.current.style.height = state.screen.height.toString() + "px"
            winref.current.style.zIndex = highestid.zindex.toString()
            highestid.zindex++
            console.log(winref.current.style, state.screen)

    })
    return (
        <div ref={winref}  className={` absolute h-4  rounded border-[1px] border-xpBarborder flex flex-col`}>
            <div className=" w-full h-10 bg-XpBar rounded-t-md flex flex-row items-center justify-between">
                <div className="w-full flex justify-center items-center ">
                <div className=" w-[90%] flex flex-row items-center gap-4">

                    <img className="h-6" src={getIcon(state.file.icon)} alt="" />
                    <h1 className="font-tahoma font-bold text-white text-sm truncate">

                        {state.file.name}
                    </h1>
                    </div>
                </div>
                <div className="w-40  flex flex-row items-center justify-around">
                    <img className="h-8" src={Minimize} alt="" />
                    <img className="h-8" src={Maximize} alt="" />
                    <img className="h-8" src={Exit} alt="" />
                </div>
            </div>
            <div className="w-full h-12 bg-contextMenu">
                    <Toolbar state={state}/>
            </div>
            <div className="h-[1px] w-full bg-Contextborder"></div>
            <div className="w-full  flex-1 bg-contextMenu overflow-hidden">
                <Execute state={state}/>
            </div>
        </div>
    )
}
const Toolbar = ({state}:{state : ProgramState}) => {
    return (
        <div>

        </div>
    )
}
const Execute = ({state}:{state : ProgramState}) =>{
    return (
        <div></div>
    )
}
export default Windows
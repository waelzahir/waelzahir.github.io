import { useContext, useEffect, useRef } from "react"
import { ExecutionState, ProgramState } from "../../../types/ProgramState"
import { highestid } from "../../../App"
import Exit from "../../../assets/Exit.png"
import Maximize from "../../../assets/Maximize.png"
import Minimize from "../../../assets/Minimize.png"
import { getIcon } from "../Files/file"
import MemProviderContext from "../../../Context/MemContext"
import { filetype } from "../../../types/ProgramType"
import { FolderContent } from "./Executors/Folder"


const  minimizeWin  = (e:any, state: ProgramState, Memory : any) =>{
    e.preventDefault()
    Memory[1]((st:ProgramState[]) => {
        let index =  st.findIndex((prog) => prog.proccess === state.proccess)
        st[index].state = ExecutionState.reduced
        return st.slice()
    } )
}
const  MaximizeWin  = (e:any, state: ProgramState, refwin : HTMLDivElement | null) =>{
    e.preventDefault()
    const win = document.getElementById("Desktop")
    if (!win || !refwin)
        return 
    if (
        win.offsetHeight === refwin.offsetHeight && 
        win.offsetLeft === refwin.offsetLeft &&
        win.offsetTop === refwin.offsetTop &&
        win.offsetWidth === refwin.offsetWidth 
    )
    {
        refwin.style.top = state.screen.y + "px" 
        refwin.style.left = state.screen.x + "px"
        refwin.style.width = state.screen.width + "px"
        refwin.style.height = state.screen.height + "px"
        console.log(state.screen)
    }
    else{
        refwin.style.top = win.offsetTop+"px"
        refwin.style.left =  win.offsetLeft + "px"
        refwin.style.width = win.offsetWidth + "px"
        refwin.style.height = win.offsetHeight + "px"
    }
   
}
const  closewin  = (e:any, state: ProgramState, Memory : any) =>{
    e.preventDefault()
    Memory[1]((st:ProgramState[]) => {
        let newstate =  st.filter((prog) => prog.proccess !== state.proccess)
        return newstate.slice()
    } )

}


const movewindow =  (e:any, windo:HTMLDivElement | null, bar : HTMLDivElement | null, state: ProgramState , Memory :any) => {
    var x1 = e.clientX, y1 = e.clientY, x2 = 0, y2 = 0;
    let drag = false
    
    if (!windo || !bar)
        return 
    windo.style.zIndex = highestid.zindex.toString()
    highestid.zindex++
        const move = (e:any) =>
        { 
            drag = true
            x2 =  x1 - e.clientX
            y2 = y1 - e.clientY 
            y1 =  e.clientY
            x1 = e.clientX
            e.preventDefault()
            console.log("move")

            windo.style.top = (windo.offsetTop -  y2) + "px";
            windo.style.left = (windo.offsetLeft - x2) + "px";
        }
        const stop = (e:any) =>
        {
            e.preventDefault()

            window.onmousemove = null
            window.onmouseup = null
            if (drag)
            {
                state.screen.y = (windo.offsetTop -  y2)
                state.screen.x = (windo.offsetLeft - x2)
                Memory[1]((st: ProgramState []) => {
                    const index = st.findIndex(p => p.proccess === state.proccess)
                    st[index].screen = state.screen
                    return st.slice()
                })
            }
            drag = false
        }
        window.onmousemove = move
        window.onmouseup = stop
}
const Windows = ({state}:{state :ProgramState}) =>
{
    const winref = useRef<HTMLDivElement>(null)
    const barref = useRef<HTMLDivElement>(null)
    const Memory = useContext(MemProviderContext)

    useEffect(() => {
            barref.current?.addEventListener("mousedown", (e) => movewindow(e, winref.current , barref.current, state, Memory))
            if (!winref.current)
                return 
            state.screen.x = (window.innerWidth / 4 )
            state.screen.y = (window.innerHeight / 6 )
            state.screen.width = (window.innerWidth / 2)
            state.screen.height = (window.innerHeight / 3 *2  )
            winref.current.style.top = state.screen.y.toString() +"px"
            winref.current.style.left = state.screen.x.toString() +"px"
            winref.current.style.width = state.screen.width.toString() + "px"
            winref.current.style.height = state.screen.height.toString() + "px"
            winref.current.style.zIndex = highestid.zindex.toString()
            highestid.zindex++
            if (Memory)
            Memory[1]((st: ProgramState []) => {
            const index = st.findIndex(p => p.proccess === state.proccess)
                st[index].screen = state.screen
                return st.slice()
            })
            console.log("opened", state.screen)

    },[])

    return (
        <div key={state.proccess} ref={winref}  className={`${state.state === ExecutionState.reduced? "hidden": ""} absolute h-4  rounded border-[1px] border-xpBarborder flex flex-col `}>
            <div ref={barref} id="progBar" className=" w-full h-10 bg-XpBar rounded-t-md flex flex-row items-center justify-between">
                <div className="w-full flex justify-center items-center ">
                <div className=" w-[90%] flex flex-row items-center gap-4">

                    <img className="h-6" src={getIcon(state.file.icon)} alt="" />
                    <h1 className="font-tahoma font-bold text-white text-sm truncate">

                        {state.file.name}
                    </h1>
                    </div>
                </div>
                <div className="w-40  flex flex-row items-center justify-around">
                    <img onClick={(e) => minimizeWin( e, state, Memory)} className="h-8 hover:opacity-80" src={Minimize} alt="" />
                    <img onClick={(e) => MaximizeWin( e, state, winref.current)} className="h-8 hover:opacity-80" src={Maximize} alt="" />
                    <img  onClick={(e) => closewin( e, state, Memory)} className="h-8 hover:opacity-80" src={Exit} alt="" />
                </div>
            </div>
            <Toolbar state={state}/>
            <div className="h-[1px] w-full bg-Contextborder"></div>
            <div className="w-full  flex-1 bg-contextMenu overflow-hidden">
                <Execute state={state}/>
            </div>
        </div>
    )
}
const Toolbar = ({state}:{state : ProgramState}) => {
    let item;
    switch (state.file.type)
    {
        case filetype.Folder:
            item = null
            break ;
        case filetype.Text:
            item = null
            break ;

        case filetype.Project:
            item = null
            break ;

        default:
                item = null
    }
    return (
        item
    )
    
}
const Execute = ({state}:{state : ProgramState}) =>{
    let item;
    switch (state.file.type)
    {
        case filetype.Folder:
            item = <FolderContent state={state}/>
            break ;
        case filetype.Text:
            item = <></>
            break ;
        case filetype.Trash:
                item = <FolderContent state={state}/>
                break ;
        case filetype.Project:
            item = <></>
            break ;

        default:
                item = null
    }
    return (
        item
    )
}
export default Windows
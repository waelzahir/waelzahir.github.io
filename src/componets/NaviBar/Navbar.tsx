import { useContext, useEffect, useState } from "react";
import MemProviderContext from "../../Context/MemContext";
import { ExecutionState, ProgramState } from "../../types/ProgramState";
import { getIcon } from "../Window/Files/file";
import normstart from "../../assets/buttunxp1.png"
import { highestid } from "../../App";
const Clock = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString( "en-Us",{hour: '2-digit', minute:'2-digit'}));
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return <p className={`text-white font-tahoma text-xl select-none`}>{time}</p>;
}
const Tab = ({state}: {state : ProgramState}) => {
    const Mem = useContext(MemProviderContext)

    const maximize = () => 
    {
        const startmenu = document.getElementById("startmenu")
            if (startmenu && !startmenu.classList.contains("hidden"))
                startmenu.classList.add("hidden")
        if (Mem )
            Mem[1]((st:ProgramState[]) => {
                let index =  st.findIndex((prog) => prog.proccess === state.proccess)
                st[index].state =  st[index].state === ExecutionState.opened ? ExecutionState.reduced : ExecutionState.opened
                return st.slice()
            } )
    }
    return (
        <div onClick={() => maximize()} className="h-[95%] min-w-8 w-52 bg-openTab border-[1px] border-XpBar rounded flex flex-row items-center justify-around cursor-pointer hover:bg-black  hover:bg-opacity-10" >
              
            <img className="h-[90%]" src={getIcon(state.file.icon)} alt="" />
            <h1 className=" w-36 font-tahoma text-white font-medium truncate cursor-pointer">
                {state.file.name}
            </h1>
        </div>
    )
}
const ShowStart = () =>
{
    const menu = document.getElementById("startmenu")
    if (!menu)
        return 
    if (menu.classList.contains("hidden"))
        {
            menu.classList.remove("hidden")
            menu.style.zIndex = highestid.zindex.toString()
            highestid.zindex++
        }
        else
            menu.classList.add("hidden")
}
const NaviBar = () =>
{
 
    //todo navbar context menu and start bar
    const Memory = useContext(MemProviderContext)
    return (
        <div  id="navibar" className="h-12 w-full flex flex-row justify-between items-center bg-XpBar border-t-4 border-xpBarborder ">
            <div  id="Start" className="h-full   w-44  flex  items-center justify-centerbg-green-700 rounded-r-[15px] cursor-pointer" >
                <img onClick={() => ShowStart()} className="h-12  hover:opacity-80 " src={normstart} alt="" />
            </div>
            <div className="mx-6 h-full w-full flex flex-row items-center gap-x-2 overflow-x-scroll">
                
                {Memory && Array.isArray(Memory[0]) ? Memory[0].map((state:ProgramState) => <Tab state={state}/>) : null}
            </div>
            <div id="tastkbarclock" className="h-full w-44 flex justify-around items-center  bg-[#47b2ea] ">
            
                <div className=" pr-2 w-0 h-0  border-t-[5px] border-t-transparent border-r-[5px] border-r-white border-b-[5px] border-b-transparent"></div>
                <Clock/>
            </div>
        </div>
    )
}
export default NaviBar
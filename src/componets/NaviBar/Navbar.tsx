import { useContext, useEffect, useState } from "react";
import Start from "../../assets/start.png"
import MemProviderContext from "../../Context/MemContext";
import { ProgramState } from "../../types/ProgramState";
import { getIcon } from "../Window/Files/file";
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
    return (
        <div className="h-[95%] min-w-8 w-52 bg-openTab border-[1px] border-XpBar rounded flex flex-row items-center justify-around cursor-pointer hover:bg-black  hover:bg-opacity-10" >
              
            <img className="h-[90%]" src={getIcon(state.file.icon)} alt="" />
            <h1 className=" w-36 font-tahoma text-white font-medium truncate cursor-pointer">
                {state.file.name}
            </h1>
        </div>
    )
}
const NaviBar = () =>
{
    const Memory = useContext(MemProviderContext)
    return (
        <div  id="navibar" className="h-12 w-full flex flex-row justify-between items-center bg-XpBar border-t-4 border-xpBarborder cursor-pointer">
            <div className="h-full bg-StartButton  w-52  flex flex-row items-center justify-start hover:bg-green-700 rounded-r-[15px] ">
                <div className="flex flex-row justify-around items-center h-full w-[80%]">
                    <img className="h-8" src={Start}/>
                    <h1 className="font-tahoma font-bold text-2xl text-white">
                        Start
                    </h1>
                </div>
            </div>
            <div className="mx-6 h-full w-full flex flex-row items-center gap-x-2 overflow-x-scroll">
                
                {Memory && Array.isArray(Memory[0]) ? Memory[0].map((state:ProgramState) => <Tab state={state}/>) : null}
            </div>
            <div className="h-full w-64 flex justify-around items-center  bg-StateBar">
            
                <div className="pr-2 w-0 h-0  border-t-[5px] border-t-transparent border-r-[5px] border-r-white border-b-[5px] border-b-transparent"></div>
                <Clock/>
            </div>
        </div>
    )
}
export default NaviBar
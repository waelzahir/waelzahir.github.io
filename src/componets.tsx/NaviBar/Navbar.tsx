import { useEffect, useState } from "react";
import Start from "../../assets/start.png"
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
const NaviBar = () =>
{
    return (
        <div  id="navibar" className="h-12 w-full flex flex-row justify-between items-center">
            <div className="h-full bg-StartButton border-t-[3px] border-gray-700 w-52  flex flex-row items-center justify-center hover:bg-green-700">
                <div className="flex flex-row justify-around items-center h-full w-[60%]">
                    <img className="h-8" src={Start}/>
                    <h1 className="font-tahoma font-bold text-2xl text-white">
                        Start
                    </h1>
                </div>
            </div>
            <div className="h-full w-full">

            </div>
            <div className="h-full w-64 flex justify-center items-center border-t-[3px] border-gray-700 bg-StateBar">
                <Clock/>
            </div>
        </div>
    )
}
export default NaviBar
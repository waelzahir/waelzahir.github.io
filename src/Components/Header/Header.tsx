import { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return <p className={`text-center font-pixelify text-text text-3xl`}>{time}</p>;
}

const Header = () => {
    return (
        <div className="level1 flex flex-row w-full  md:h-14 h-10 border-border border-opacity-20 border-solid border-[3px] ">
            <div className="w-full h-full flex justify-center items-center">
                    <h1 className="w-full text-center font-pixelify text-text text-3xl">
                        OUAIL ZAHIR
                    </h1>
            </div>
            <div className="w-full h-full flex justify-end items-center ">
                <h1 className="text-center font-pixelifytext-3xl w-full">
                    <Clock/>
                </h1>
            </div>
        </div>
    )
}

export default Header
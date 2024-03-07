
import { InitState } from "../types/GlobalMetadata"
import Pic from "../assets/Userpic.jpg"
import { useEffect, useState } from "react"
const updatePersistance = (setter:any, val:boolean) =>
{

    setter((prev: InitState) => {
        return {persistant: val, user : prev.user}
    })
}
const login = (setter:any) => {
    setter((prev: InitState) => {
        return {persistant: prev.persistant, user : 0}
    })
}
const Animation = () => {
        const [points , setpoints] = useState(0)
        useEffect(() => {
            const int = setInterval(() => setpoints((p: number) => p + 1), 500)
            return () => {
                clearInterval(int)
            }
        }, [])
        let t = "";
        for (let i = 0; i < points; i++)
            t+="."
        return (
        <div className="w-full h-screen bg-[#638ed3] flex justify-center items-center"> 
            <h1 className="text-6xl font-tahoma text-white">
                loading {t}
            </h1> 

        </div>
        )
}
const WelcomePage  = (props:any) =>{
    const [animate, setAnimation] = useState(false)
    
    if (animate)
    {
        setTimeout(() => login(props.InitState[1]), 2000)
        return <Animation />
    }    
    return (
        <div className="w-full bg-black h-screen overflow-hidden flex flex-col">
            <div className="h-24 w-full bg-[#638ed3] flex items-center">
                <h1 className="font-tahoma font-semibold ml-9 text-white">Portfolio is still under Construction, but still you can try to navigate it </h1>
            </div>
            <div className="w-full flex-1 bg-[#12387f] flex flex-row items-center justify-center">
                <div className=" text-white h-[30%] w-[40%] flex flex-col items-center justify-around">
                    <h1 className="font-egoist text-2xl font-bold">Welcome To My Portfolio</h1>
                       
                </div>
                <div className="w-[2px] h-[50%] bg-[#638ed3]"></div>
                <div className=" w-[20%] h-[50] ml-9 ">
                          <div onClick={() =>  setAnimation(true)} className="w-90 h-32 rounded  flex flex-row items-center bg-[#638ed3] hover:bg-blue-950 hover:opacity-90 cursor-pointer">
                            <img className="h-28  border-[#12387f] ml-2 rounded border-[9px]" src={Pic} alt="" />
                            <h1 className=" ml-10 text-3xl font-bold font-egoist"> Guest</h1>
                          </div>
                </div>
            </div>
            <div className="h-24 w-full bg-[#638ed3] flex items-center">
            {
                !props.InitState[0].persistant ?
                <div className="flex flex-row  items-center  h-20 w-full ">
                    <h1 className="font-tahoma font-semibold ml-9 ">Do you want to make the changes persistent for your next visit?</h1>
                        <div onClick={() => updatePersistance(props.InitState[1], true)} className=" ml-9 border-2 border-[#12387f] w-10 h-10 rounded flex justify-center items-center hover:bg-blue-950  hover:opacity-95 cursor-pointer">
                                <h1   className="font-tahoma font-semibold  ">Yes</h1>                            
                        </div>
                </div>
                : null
            }
            </div>
        </div>
    )
}


export default WelcomePage
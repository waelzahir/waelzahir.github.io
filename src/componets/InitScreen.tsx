
import Pic from "../assets/pawn.png"
import { useEffect, useState } from "react"
import { Envirment } from "../types/Envirment"

const updatePersistance = (setter:any, val:boolean) =>
{

    setter((prev: Envirment)  : Envirment => {
        return {
            Background: prev.Background,
            fileid: prev.fileid,
            zindex: prev.zindex,
            process: prev.process,
            persistant: val,
            user : prev.user
        }
    })
}
const login = (setter:any) => {
    setter((prev: Envirment):Envirment => {
        return {
            Background: prev.Background,
            fileid: prev.fileid,
            zindex: prev.zindex,
            process: prev.process,
            persistant: prev.persistant,
            user : 0
        }
    })
}
const Animation = () => {

        return (
        <div className="w-full h-screen bg-purple-800 flex justify-center items-center"> 
            <h1 className="text-6xl font-egoist font-bold text-white">
                Hello
            </h1> 

        </div>
        )
}
const WelcomePage  = ({Env} : {Env: [Envirment, React.Dispatch<React.SetStateAction<Envirment>>]}) =>{
    const [animate, setAnimation] = useState(false)
    
    if (animate)
    {
        setTimeout(() => login(Env[1]), 2000)
        return <Animation />
    }
    console.log("hro", Env[0])
    if (!Env)
        return ;
    return (
        <div className="w-full bg-purple-800 h-screen overflow-hidden flex flex-col">
            <div className="h-24 w-full  flex items-center">
                <h1 className="font-tahoma font-semibold ml-9 text-white">Portfolio is still under Construction, but still you can try to navigate it </h1>
            </div>
            <div className="w-full flex-1  flex flex-row items-center justify-center">
                <div className=" text-white h-[30%] w-[40%] flex flex-col items-center justify-around">
                    <h1 className="font-egoist text-2xl font-bold">Welcome To My Portfolio</h1>
                       
                </div>
                <div className="w-[2px] h-[50%] bg-purple-400"></div>
                <div className=" w-[20%] h-[50] ml-9 ">
                          <div onClick={() =>  setAnimation(true)} className="w-90 h-32 rounded  flex flex-row items-center  bg-purple-400 hover:bg-purple-950 hover:opacity-90 cursor-pointer">
                            <img className="h-28  border-black ml-2 rounded border-[9px]" src={Pic} alt="" />
                            <h1 className=" ml-10 text-3xl font-bold font-egoist"> Guest</h1>
                          </div>
                </div>
            </div>
            <div className="h-24 w-full flex items-center">
            {/* {
                !Env[0].persistant ?
                <div className="flex flex-row  items-center  h-20 w-full ">
                    <h1 className="font-tahoma font-semibold ml-9 ">Do you want to make the changes persistent for your next visit?</h1>
                        <div onClick={() => updatePersistance(Env[1], true)} className=" ml-9 border-2 border-[#12387f] w-10 h-10 rounded flex justify-center items-center hover:bg-blue-950  hover:opacity-95 cursor-pointer">
                                <h1   className="font-tahoma font-semibold  ">Yes</h1>                            
                        </div>
                </div>
                : null
            } */}
            </div>
        </div>
    )
}


export default WelcomePage
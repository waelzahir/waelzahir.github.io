import { about } from "../../../types/AboutData"
import Face from "../../../assets/Face.jpeg"
import fr from "../../../assets/frresume.pdf"
import en from "../../../assets/enresume.pdf"


const AboutComp = ({about}: {about:about}) =>
{
    return (
        <div className="w-full h-full flex flex-row  overflow-hidden">
            <div className="w-2/6 h-full flex justify-center items-center">
                <div className="w-5/6 h-[90%]  flex flex-col items-center overflow-hidden overflow-y-scroll">
                    <img className="w-[50%] aspect-square mt-4 rounder" src={Face} alt="" />
                    <div className="h-20 w-full flex justify-center items-center ">

                        <h1 className=" text-3xl font-egoist font-bold">
                            {about.name}
                        </h1>
                    </div>
                    <div className="h-48 w-full flex flex-col items-center gap-y-3" >
                        <h1 className="text-2xl font-egoist font-semibold">
                            - contact -
                        </h1>
                        <a className="w-[50%] h-11 border-2 border-purple-800 flex justify-center items-center gap-x-2 hover:bg-purple-300 hover:opacity-90 cursor-pointer" href={"https://twitter.com/__ouail__"} target="_blank"> 
                                <h1 className=" w-full text-center truncate font-egoist font-bold">Twitter</h1>
                        </a>
                        <a className="w-[50%] h-11 border-2 border-purple-800 flex justify-center items-center gap-x-2 hover:bg-purple-300 hover:opacity-90 cursor-pointer" href={"https://linkedin.com/in/waelzahir/"} target="_blank"> 
                                <h1  className=" w-full text-center truncate font-egoist font-bold">linkedin</h1>
                        </a>
                        <a className="w-[50%] h-11 border-2 border-purple-800 flex justify-center items-center gap-x-2 hover:bg-purple-300 hover:opacity-90 cursor-pointer" href={"https://github.com/waelzahir"} target="_blank"> 
                                <h1  className=" w-full text-center truncate font-egoist font-bold">Github</h1>
                        </a>
                    </div>
                    <div className="h-40 w-full flex flex-col items-center gap-y-3 mt-2" >
                        <h1 className="text-2xl font-egoist font-semibold">
                            - my resume -
                        </h1>
                        <a className="w-[50%] h-11 border-2 border-purple-800 flex justify-center items-center gap-x-2 hover:bg-purple-300 hover:opacity-90 cursor-pointer" href={en} target="_blank" download> 
                                <h1  className=" w-full text-center truncate font-egoist font-bold">English</h1>
                        </a>
                        <a className="w-[50%] h-11 border-2 border-purple-800 flex justify-center items-center gap-x-2 hover:bg-purple-300 hover:opacity-90 cursor-pointer" href={fr} target="_blank" download> 
                                <h1  className=" w-full text-center truncate font-egoist font-bold">French</h1>
                        </a>
                    </div>
                </div>

            </div>
            <div className="flex-1 h-full flex justify-center overflow-hidden">
                <div className="w-[90%]   flex flex-col items-center gap-16 overflow-y-scroll">
                    <h1 className="text-5xl mt-16">
                        {about.me}
                    </h1>
                    <h1  className="text-3xl">
                        {about.frontEnd}
                    </h1>
                    <h1  className="text-3xl">
                        {about.backend}
                    </h1>
                    <h1  className="text-3xl">
                        {about.data}
                    </h1>
              
                </div>
            </div>
            
        </div>
    )
}
export default AboutComp
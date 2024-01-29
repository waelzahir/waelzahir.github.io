import { useState } from "react"
import { Option } from "./Option"
import down from '../../assets/arrowdown.svg'
import right from '../../assets/arrowright.svg'


export const SideBar = () =>
{
    const [about, setabout] = useState(-1)
    const [Portfolio, setPortfolio] = useState(-1)
    const [projects, setprojects] = useState(-1)
    return (
        <div className={`h-full w-[20%] bg-gray-800 m-auto flex flex-col  justify-start   `}>
                    <div   className={`bg-black text-white cursor-pointer`}>
                        <div onClick={() => about === -1  ? setabout(0) : setabout(-1)} className=" flex flex-row items-center">
                        <img  className=" w-[15px] h-[15px]"src={about === -1 ?   right :down }></img>
                            <p className="text-center">
                                About
                            </p>
                        </div>
                        {
                            about != -1  ? 
                            <div>
                                <Option index={1} choice={about} name="1" type={0} setter={setabout}/>
                                <Option index={2} choice={about} name="2" type={0} setter={setabout}/>
                                <Option index={3} choice={about} name="3" type={0} setter={setabout}/>

                            </div>    
                            : null
                        }
                  </div>
            <div  className={`bg-black text-white cursor-pointer`}>
                    <div onClick={() => Portfolio === -1 ? setPortfolio(0) : setPortfolio(-1)} className=" flex flex-row  items-center">
                        <img  className=" w-[15px] h-[15px]"src={Portfolio === -1 ?   right :down }></img>
                        <p className="text-center">
                        Portfolio
                        </p>
                    </div>
                    {
                        Portfolio!= -1 ?
                        <div>
                        <Option index={1} choice={Portfolio}  name="1" type={1} setter={setPortfolio}/>
                        <Option index={2} choice={Portfolio}  name="2" type={1} setter={setPortfolio}/>
                        <Option index={3} choice={Portfolio}  name="3" type={1} setter={setPortfolio}/>

                    </div>  
                        : null
                    }
                </div>
            <div  className={`bg-black text-white cursor-pointer `}>
                    <div onClick={() => projects === -1 ? setprojects(0) : setprojects(-1)} className=" flex flex-row items-center"> 
                        <img  className=" w-[15px] h-[15px]"src={projects === -1 ?   right :down }></img>
                            <p className="text-center">
                                Projects
                            </p>
                    </div>
                    {
                        projects != -1 ? 
                        <div>
                            <Option index={1} choice={projects}  name="1" type={2} setter={setprojects}/>
                            <Option index={2} choice={projects}  name="2" type={2} setter={setprojects}/>
                            <Option index={3} choice={projects}  name="3" type={2} setter={setprojects}/>
                        </div>  
                    : null
                    }
            </div>
        </div>
    )
}
import { useState } from "react"
import { Option } from "./Option"
import down from '../../assets/arrowdown.svg'
import right from '../../assets/arrowright.svg'


export const SideBar = ({width} : {width : number}) =>{
    const [about, setabout] = useState(-1)
    const [Portfolio, setPortfolio] = useState(-1)
    const [projects, setprojects] = useState(-1)
    return (
        <div className={`h-full w-full bg-gray-800 m-auto flex flex-col  justify-start   `} style={{width: `${width}px`}}>
                    <div   className={`bg-black text-white cursor-pointer`}>
                        <div onClick={() => about === -1  ? setabout(0) : setabout(-1)} className=" flex flex-row justify-around">
                        <img  className="bg-white w-[15px] h-[15px]"src={about === -1 ?   right :down }></img>
                            <p>
                                About
                            </p>
                        </div>
                        {
                            about != -1  ? 
                            <div>
                                <Option index={1} choice={about} setter={setabout}/>
                                <Option index={2} choice={about} setter={setabout}/>
                                <Option index={3} choice={about} setter={setabout}/>

                            </div>    
                            : null
                        }
                  </div>
            <div  className={`bg-black text-white cursor-pointer`}>
                    <div onClick={() => Portfolio === -1 ? setPortfolio(0) : setPortfolio(-1)} className=" flex flex-row ">
                        <img  className="bg-white w-[15px] h-[15px]"src={Portfolio === -1 ?   right :down }></img>
                        <p>
                        Portfolio
                        </p>
                    </div>
                    {
                        Portfolio!= -1 ?
                        <div>
                        <Option index={1} choice={Portfolio} setter={setPortfolio}/>
                        <Option index={2} choice={Portfolio} setter={setPortfolio}/>
                        <Option index={3} choice={Portfolio} setter={setPortfolio}/>

                    </div>  
                        : null
                    }
                </div>
            <div  className={`bg-black text-white cursor-pointer `}>
                    <div onClick={() => projects === -1 ? setprojects(0) : setprojects(-1)} className=" flex flex-row "> 
                    <img  className="bg-white w-[15px] h-[15px]"src={projects === -1 ?   right :down }></img>
                        <p>
                            Projects
                        </p>
                    </div>
                    {
                        projects != -1 ? 
                        <div>
                            <Option index={1} choice={projects} setter={setprojects}/>
                            <Option index={2} choice={projects} setter={setprojects}/>
                            <Option index={3} choice={projects} setter={setprojects}/>
                        </div>  
                    : null
                    }
            </div>
        </div>
    )
}
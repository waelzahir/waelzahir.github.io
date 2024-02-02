import { useEffect } from "react"
import Projects from "./Projects"
import AboutMe from "./AboutMe"
import Skills from "./Skils"
import Contact from "./Contact"


const Con =(choice:number) => {
    console.log(choice)
    switch (choice)
    {
        case 0:
            return <AboutMe />
        case 1:
            return <Skills/>
        case 2:
            return <Projects/>
        case 3:
            return <Contact/>
        default:
            return (
                <div className="w-full flex flex-col">
                    <AboutMe />
                    <Skills/>
                    <Projects/>
                    <Contact/>
                </div>
            )
    }
}
const Content = ({choice}:{choice:number}) => {

   
    return (
        <div className=" border-2 border-BarsColor  w-full  h-full  overflow-y-auto md:h-[94vh]">
            {Con(choice)}
        </div>
    )
}
export default Content
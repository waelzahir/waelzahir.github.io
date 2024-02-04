import { useState } from "react"
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Skills from "./Skills"
import { Loading } from "../Loading"

const applyChoice = (choice:number, time:any) => 
{
    switch (choice) {
        case 0:
            return <About />
        case 1:
            return <Skills />
        case 2:
            return <Projects />
        case 3:
            return <Contact />
        default:
            return <About />
    }
}
const Content = ({choice} : { choice: number}) => {
    const [isLoading, setLoading] = useState(true)
        if (isLoading)
            return <Loading/>
    return (
    <div className="w-full h-full  border-border border-opacity-20 border-solid border-[3px]">
        {
            applyChoice(choice, setLoading)
        }
    </div>)
}

export default Content
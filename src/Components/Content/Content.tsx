import { useEffect, useState } from "react"
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Skills from "./Skills"
import { Loading } from "../Loading"
import { useGetProjects } from "../../hooks/projects"
import AllProjects from "../../metadata/projects"
import { ProjectInfo } from "../types/ProjectInfo"

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
    const [projects, setterprojects] = useState<ProjectInfo[]>([])
    useGetProjects(setterprojects, AllProjects)
    console.log(AllProjects)
    const [isLoading, setLoading] = useState(false)
        if (isLoading)
            return <Loading/>
    return (
    <div className="w-full h-full  border-border border-opacity-20 border-solid border-[3px] bg-[#020805] bg-opacity-50">
        {
            applyChoice(choice, setLoading)
        }
    </div>)
}

export default Content
import { useState } from "react"
import AllProjects from "../../metadata/projects"
import { ProjectInfo } from "../types/ProjectInfo"
import PHP from "../../assets/PHP.svg"
import TypeScript from "../../assets/typescript.svg"
import C from "../../assets/c.svg"
import HTML from "../../assets/html.svg"
import CPP from "../../assets/cpp.svg"
import close from "../../assets/close.svg"
import Clonebutton from "./Projecttutils/clonebutton"
import Topics from "./Projecttutils/topics"
import Descritpion from "./Projecttutils/description"
import Visitbutton from "./Projecttutils/visitbutton"
import ProjectName from "./Projecttutils/ProjectName"
import ProjectLanguage from "./Projecttutils/ProjectLanguage"


const imgfilter  = (language: string) => 
{
    switch (language)
    {
        case "TypeScript":
            return TypeScript;
        case "C":
            return C;
        case "HTML":
            return HTML
        case "PHP":
            return PHP;
        case "C++":
                return CPP;
        default :
            return null;
    }
}
const ProjectItem = ({item, itemsetter}: {item:ProjectInfo, itemsetter: any}) => 
{
    if (!item.name.length)
        return null
    return (
        <div onClick={()=>itemsetter(item)} className=" w-full h-full   flex flex-col justify-center items-center  border-border border-opacity-50 border-2 cursor-pointer">
                <div className=" w-full h-full flex justify-center items-center ">
                    <img className="w-20 h-20" src={imgfilter(item.language)} alt="" />
                </div>
                <div className="w-[full] h-full flex justify-center items-center overflow-hidden">
                    <h1 className="text-text  lg:text-2xl ">
                    {item.name}
                    </h1>
                </div>
        </div>
    )
}

const ProjectDescriptio = ({project, itemsetter} : {project : ProjectInfo, itemsetter:any}) => 
{
    return (
        <div className="w-full h-full flex justify-center items-center  border-border border-opacity-50 border-2  ">
            <div className="w-[90%] h-[90%] border-black border-2">
                <div className="bg-black bg-opacity-40 h-10 w-full flex flex-row-reverse items-center pr-1 ">
                    <img onClick={() => itemsetter(null)} className="w-8 h-[80%] bg-red-900 hover:bg-red-500" src={close} alt="close" />
                </div>
                <div className="text-white">
                    <ProjectName name={project.name}/>
                    <Descritpion deecritpion={project.description}/>
                    <ProjectLanguage  language={project.language}/>
                    <Visitbutton  url={project.html_url}/>
                    <Clonebutton url={project.clone_url} />
                    <Topics topics={project.topics}/>
                </div>
            </div>
        </div>
    )
}
const Projects = () => {
    const FileNames: any [] = [];
    const [Project , setSelectedProject] = useState<ProjectInfo | null>(null)
    AllProjects.forEach((V:ProjectInfo, k:string) => FileNames.push(<ProjectItem item={V}  itemsetter={setSelectedProject}/>))
    if (Project)
        return <ProjectDescriptio project={Project}  itemsetter={setSelectedProject}/>
    return (
        <div className="w-full h-full flex justify-center items-center  border-border border-opacity-50 border-2  ">
           <div className="w-[90%] h-[90%] grid grid-cols-3 md:grid-cols-4     gap-10 ">
            {FileNames}
           </div>
        </div>
    )
}

export default Projects

import { ProjectType } from "../types/ProjectType";
import AllProjects from "../Metadata/projects";

const About = () =>
{
    return (
        <div className="w-full h-full flex flex-col text-integrator">
            <div className=" w-full h-32 flex flex-col justify-center items-center">
                <h1 className="w-full   text-end text-6xl  font-egoist  text-pretty">Wael Zahir</h1>
                <h2 className="w-full text-end text-sm font-egoist ">Jack off All Trades,<a className="text-PrimaryText"> Master Of All.</a></h2>
            </div>
            <div className="w-full   flex-1 flex justify-end items-end">
                <div className=" w-60 h-64 flex justify-center items-center">
                <h1 className="text-xl w-40 h-full text-SecondaryText">
                    Moroccan Software Devoloper, Passionate about everything computer related exept user Interfaces.
                </h1>
                </div>
            </div>
        </div>
    )
}

const Projects = () =>{
    var Skills: any = new Set()
    var Projects: ProjectType [] = [];
    console.log(AllProjects, "From")
    AllProjects.forEach((V:ProjectType) =>{
        if (V.name.length)
            Projects.push(V)
        V.topics.forEach((str: string) => {
            Skills.add(str)
        })
    }) 
    
    return (
        <div className=" w-full h-full  flex  items-center">
            
                <div className=" w-full h-[80%] flex flex-col items-center">
                    <div className="flex flex-col  gap-9  w-full h-full overflow-y-scroll items-center">
                        {
                            Projects.map((proj: ProjectType, index:number) => <ProjComponent key={index} project={proj}/>)
                        }
                    </div>
                </div>
       
      
        
    </div>
    )
}
const ProjComponent = ({project}:{project : ProjectType}) => {
  
    return (

        <div className="flex flex-row gap-9 items-center w-full justify-end">
            <h1 className="text-2xl font-egoist text-SecondaryText">{ project.topics.join(" / ")}</h1>
            <h1 className="font-bold text-integrator">|</h1>
            <a href={project.html_url} target="_blank" className="cursor-pointer">
                <h1 className="text-6xl font-egoist text-PrimaryText hover:text-integrator">{project.name}</h1>
            </a>
        </div>
    )
}
const elemSelect = (select:number) =>
{
    switch (select)
    {
        case 0:
            return <About />
        case 1:
            return <Projects />
        case 2:
            return <></>
        default:
            return <></>
    }
} 


export const Selection = (props:any) => {
    return(
            elemSelect(props.active)
    ) 
}
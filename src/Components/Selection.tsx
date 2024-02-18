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
                <div className=" w-96 h-96 flex justify-center items-center">
                <h1 className="font-egoist font-bold w-80 text-3xl h-full text-SecondaryText">
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
        <div className=" w-full h-full  flex  items-center overflow-hidden">
            
                <div className=" w-full h-[92%] md:h-[80%] flex flex-col items-center  overflow-hidden">
                    <div className="flex flex-col  gap-9  w-full h-full overflow-y-scroll items-center ">
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

        <div className="flex flex-row gap-9 items-center w-full justify-center md:justify-end">
            <h1 className="hidden lg:flex md:text-2xl text-sm font-egoist text-SecondaryText">{ project.topics.join("   -  ")}</h1>
            <h1 className="font-bold text-integrator hidden lg:flex">|</h1>
            <a href={project.html_url} target="_blank" className="cursor-pointer">
                <h1 className="text-xl md:text-6xl font-egoist text-PrimaryText hover:text-integrator">{project.name}</h1>
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
            return <Contactform />
        default:
            return <></>
    }
} 


export const Selection = (props:any) => {
    return(
            elemSelect(props.active)
    ) 
}


const Contactform = () => {
    const form = fetch("https://docs.google.com/forms/d/e/1FAIpQLScU2qceJ9Xqtdphxv6shHhRv4JBciGkPI0zLBXZGvyKjZGhCA/viewform?embedded=true")
    .then(async (red) => {
        if (red.ok)
            console.log(await red.json())
    })
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-[50%] flex flex-col  justify-between  items-center md:items-end">

                <div className='flex h-8 justify-start items-center gap-x-2'>
                    <a href="https://github.com/waelzahir/" target="_blank">
                        <h1 className=' font-egoist font-bold text-4xl  text-PrimaryText cursor-pointer hover:text-integrator'><a className='font-mono text-xl text-SecondaryText'>Github / </a>@waelzahir</h1>
                    </a>
                </div>
                <div className='flex h-8 justify-start items-center gap-x-2'>
                    <a href="https://twitter.com/__OUAIL__" target="_blank">
                        <h1 className='font-egoist font-bold text-4xl   text-PrimaryText cursor-pointer hover:text-integrator'><a className='font-mono text-xl text-SecondaryText'>Twitter / </a>@__OUAIL__</h1>
                    </a>
                </div>
                <div className='flex h-8 justify-start items-center gap-x-2'>
                    <a href="https://www.linkedin.com/in/waelzahir/" target="_blank">
                          <h1 className='font-egoist font-bold text-4xl   text-PrimaryText cursor-pointer hover:text-integrator'><a className='font-mono text-xl text-SecondaryText'>Linkedin / </a>@waelzahir</h1>
                    </a>
                </div>
                <div className='flex h-8 justify-start items-center gap-x-2'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScU2qceJ9Xqtdphxv6shHhRv4JBciGkPI0zLBXZGvyKjZGhCA/viewform?usp=sf_link"  target="_blank">
                        <h1 className='font-egoist font-bold text-4xl  text-PrimaryText cursor-pointer hover:text-integrator'> <a className="font-mono text-xl text-SecondaryText">Google Forms / </a>Google</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}
import { useEffect, useState } from "react"
import { repo } from "../types/githubrepo"
import Clone from '../assets/clone.svg'

const Project = ({data}:{data:repo}) => {
    // if ( !data.description || !data.description.length)
    //     return null
    return (
        <div className="text-Orange flex flex-col justify-between items-center  border-Background border-[20px]  min-h-56 w-[90%] bg-Selection ">
       
           
        </div>
    )
}
const Projects =  () => {
    const [repos, setRepos] = useState<repo[]>([])
    useEffect(() =>{
        fetch("https://api.github.com/users/waelzahir/repos", {
            headers:{
                'Accept': "application/vnd.github.inertia-preview+json"
        }}).then((data) => data.ok ? data.json() : null)
        .then((data) => data ? setRepos(data) : null)
    })

    const data = repos.map((repos: repo, index:number)=> <Project key={index} data={repos}/>)
    return (
        <div className="h-full  flex flex-col items-center overflow-y-auto  gap-y-9 w-full">
            <div className="h-32 flex justify-center items-center w-full">
                <h1 className="font-extrabold text-Comment text-2xl">Projects :</h1>
               

            </div>
            <div className="flex flex-col justify-center items-center gap-y-9 w-full ">
            {data}
            </div>
        </div>
    )
}
export default Projects
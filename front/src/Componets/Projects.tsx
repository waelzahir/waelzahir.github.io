import { useEffect, useState } from "react"
import { repo } from "../types/githubrepo"
import Clone from '../assets/clone.svg'

const Project = ({data}:{data:repo}) => {
    // if ( !data.description || !data.description.length)
    //     return null
    return (
        <div className=" ">
           <div id="leftCard" className="  ">
                <div className="">
                    <h1 className="">{data.name}:</h1>
                </div>
                <div className="">
                    <h1 className="">Github Repo</h1>
                    {/* <img onClick={() => navigator.clipboard.writeText(data.html_url)} className=""  src={Clone}></img> */}
                </div>
                <div className=" ">
                    <h1 className=" ">Clone</h1>
                    {/* <img onClick={() => navigator.clipboard.writeText(data.html_url)} className=""  src={Clone}></img> */}
                </div>
           </div>
           {/* <div id="spacer" className="h-80 w-1 bg-BarsColor"></div> */}
           <div id="rightCard" className="">
                <div className="">
                    <h1 className="">Description:</h1>
                </div>
                <div className="">
                    <p className="">{data.description}</p>
                </div>
                <div className="">
                    <h1 className="">Languages</h1>
                </div>
                <div className="">
                    <p className="">{data.description}</p>
                </div>
           </div>
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
        <div className="h-full">
            <div className="">
                <h1 className="">Projects :</h1>
            </div>
            <div className="  flex flex-col   ">
            {data}
            </div>
        </div>
    )
}
export default Projects
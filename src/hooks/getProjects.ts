import { useEffect } from "react"
import { Progtype} from "../types/file"
import { Envirment } from "../types/Envirment"
import { CreateFile } from "../utils/createfile"
import { GitProject } from "../types/gitProject"
import WhoAmI from "../types/AboutData"

const Filter = [
    "42_minishell",
    "cpp-modules",
    "cub3d",
    "ft_printf",
    "GetNextLine",
    "inception",
    "IRC-Server",
    "Java-intro",
    "philosophers",
    "Pipex",
    "Python101",
    "Transcendance",
    "waelzahir.github.io"
]

export const useGetProjects = (setFileSystem: any, SetEnvirment:any) => {
    SetEnvirment[0].fileid++;
    const desk = setFileSystem[0].get(0)
    const Projects = CreateFile("My Projects", SetEnvirment[0].fileid, Progtype.folder, [], 0);
    SetEnvirment[0].fileid++;
    const about = CreateFile("About Me", SetEnvirment[0].fileid, Progtype.about, null, 0);

    useEffect(() => {
        fetch("https://api.github.com/users/waelzahir/repos", {
            headers:{
                'Accept': "application/vnd.github.inertia-preview+json"
        }})
        .then((response) => response.ok ? response.json() : null)
        .then((data) => 
        {
            if(data)
                {
                    data.map((el:GitProject) =>{
                        if (!Filter.includes(el.name))
                                return ;
                        SetEnvirment[0].fileid++;
                        const file = CreateFile(el.name, SetEnvirment[0].fileid, Progtype.github, el, Projects.id);
                        setFileSystem[0].set(SetEnvirment[0].fileid, file);
                        Projects.content.push(file.id)
                        el.topics.map((t:string) => WhoAmI.topics.set(t,1)) 
                    })
                    SetEnvirment[1]((env:Envirment) : Envirment=>
                    {
                        return (
                            {
                                persistant:env.persistant,
                                user:env.user,
                                zindex: env.zindex,
                                fileid: SetEnvirment[0].fileid,
                                process:SetEnvirment[0].process,
                                Background:SetEnvirment[0].Background,
                            }
                            )
                    }
                    )
                    setFileSystem[1](new Map(setFileSystem[0]))
                }
            })
            about.content = WhoAmI
            setFileSystem[0].set(Projects.id, Projects);
            setFileSystem[0].set(about.id, about);
            desk.content.push(Projects.id);
            desk.content.push(about.id);
            setFileSystem[1](new Map(setFileSystem[0]))
    }, [])

}
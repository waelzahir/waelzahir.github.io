import { useEffect } from "react"
import { Progtype, file } from "../types/file"
import { Envirment } from "../types/Envirment"
import { CreateFile } from "../utils/createfile"
import { GitProject } from "../types/gitProject"

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
                    })
                    SetEnvirment[1](
                        {
                            fileid: SetEnvirment[0].fileid,
                            process:SetEnvirment[0].process,
                            Background:SetEnvirment[0].Background,
                        }
                    )
                    setFileSystem[1](new Map(setFileSystem[0]))
                }
            })
            setFileSystem[0].set(Projects.id, Projects);
            desk.content.push(Projects.id);
            setFileSystem[1](new Map(setFileSystem[0]))

               
    }, [])

}
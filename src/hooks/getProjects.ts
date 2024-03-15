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

                    SetEnvirment((env:Envirment) : Envirment=>{
                        let id = env.fileid;
                        data.map((el:GitProject) =>{
                            if (!Filter.includes(el.name))
                                return ;
                            const file = CreateFile(el.name, id ,Progtype.github, el);
                            setFileSystem((files: Map <number, file>) => {
                                files.set(id , file);
                                id++;
                                return new Map(files)
                            })
                        })
                        return {
                            Background:env.Background,
                            fileid:id,
                            process:env.process
                        }
                    })
                }
        })
    }, [])

}
import { useEffect } from "react"
import { ProjectType } from "../types/ProjectType"

export const useGetProjects = (setterprojects: any, allprojects: Map<string, ProjectType>) => {
    useEffect(() => {
        fetch("https://api.github.com/users/waelzahir/repos", {
            headers:{
                'Accept': "application/vnd.github.inertia-preview+json"
        }})
        .then((response) => response.ok ? response.json() : null)
        .then((data) => 
        {
            if(data)
                data.map((element:any) => {
        
                    if (allprojects.has(element.name))
                        allprojects.set(element.name, element)
                })
            setterprojects((p:boolean) => !p)    
        })
    }, [])

}
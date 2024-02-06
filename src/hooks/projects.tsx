import { useEffect } from "react"
import { ProjectInfo } from "../Components/types/ProjectInfo"

export const useGetProjects = (setterprojects: any, allprojects: Map<string, ProjectInfo>) => {
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
                    console.log(data)
                    if (allprojects.has(element.name))
                        allprojects.set(element.name, element)
                })
        })
    }, [])

}
import { useEffect } from "react"

export const useGetProjects = (setterprojects: any) => {
    useEffect(() => {
        fetch("https://api.github.com/users/waelzahir/repos", {
            headers:{
                'Accept': "application/vnd.github.inertia-preview+json"
        }})
        .then((response) => response.ok ? response.json() : null)
        .then((data) => 
        {
            if(data)
                setterprojects(data)
        })
    }, [])

}
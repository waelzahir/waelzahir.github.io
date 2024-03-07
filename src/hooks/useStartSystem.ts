import { useEffect } from "react"
import { highestid } from "../App";
import { file } from "../types/ProgramType";
import { Desktop } from "../Metadata/projects";

export const useStartSystem = (FileSystem:any, initstate:any) =>{
    
    useEffect(() => {
        if (localStorage.getItem("Persist"))
        {
           Object.keys(localStorage).map(( key:string) =>
           {
                if (Number.isInteger(+key))
                {
                    let filestring: string | null = localStorage.getItem(key);
                    if (filestring !== null)
                    {
                        const toparse:string = filestring                        
                        FileSystem((files: Map<number, file>) => {
                            files.set(+key, JSON.parse(toparse))
                            return new Map(files)
                        })
                        highestid.id =  highestid.id > +key ?highestid.id :+key ;
                    }
                }
           })
        }
        else{
            Desktop.map((F:file)=> {
                FileSystem((files: Map<number, file>) => {
                    files.set(F.id, F)
                    return new Map(files)
                })
                highestid.id =  highestid.id > F.id ?highestid.id : F.id ;
            })
        }
        highestid.id++;
    
      },[])
}
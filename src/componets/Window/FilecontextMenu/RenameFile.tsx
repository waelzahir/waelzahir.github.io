import {  useEffect, useState } from "react"
import { file } from "../../../types/ProgramType"

const   RenameFile =  ({SetFileSystem,  operand, setoperand}:{ SetFileSystem: any , operand:file|null, setoperand: any}) =>  {
    const [sname , setname] = useState("")
    const file = operand  ? operand : null
    let  name = file ? file.name: ""
    useEffect(()=>{
        setname(name)
        const renmen = document.getElementById("FileRename")
        if (renmen)
            renmen.addEventListener("click", (e) => {
                e.stopPropagation()
            e.preventDefault()
            })
        const rerem = document.getElementById("renremove")
            if (rerem)
            rerem.addEventListener("click", (e) => {
                e.stopPropagation()
                e.preventDefault()
                document.getElementById("FileRename")?.classList.add("hidden")
                setname("")
                })
        return () =>{
            if (renmen)
            renmen.removeEventListener("click", (e) => {
                e.stopPropagation()
            e.preventDefault()
            })
            const rerem = document.getElementById("renremove")
            if (rerem)
            rerem.removeEventListener("click", (e) => {
                e.stopPropagation()
                e.preventDefault()
                document.getElementById("FileRename")?.classList.add("hidden")
                setname("")
                })
        }
        
    },[name])
    const changeName = (e:any) =>{
        if (!file || e.which != 13)
            return 
        file.name = sname
        setname("")
        localStorage.setItem(file.id.toString() , JSON.stringify(file))
        SetFileSystem((files :Map<number, file>) => {
             files.set(file.id, file)
            return new Map(files)
        })
        document.getElementById("FileRename")?.classList.add("hidden")
        setoperand(null)

    }
   
    return (
        <div id="FileRename" className=" hidden w-48 flex absolute  flex-col justify-around items-center h-24 bg-contextMenu rounded-xl">
            <div className="flex flex-row justify-around items-center w-full">
            <h1 className="font-tahoma font-bold text-lg">
                Rename File
            </h1>
            <h1 id="renremove" className=" cursor-pointer text-center bg-red-600 border-white w-6 hover:font-bold"> X </h1>
            </div>
            <input onKeyDown={(e)=> changeName(e)} onChange={(e) => setname(e.target.value)} className="w-36 border-2 font-tahoma font-bold" value={sname} type="text" />
        </div>
    )
}
export default RenameFile
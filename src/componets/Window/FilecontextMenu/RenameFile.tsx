import { useContext, useEffect, useState } from "react"
import MemProviderContext from "../../../Context/MemContext"
import { file } from "../../../types/ProgramType"
import { ExecutionState, ProgramState } from "../../../types/ProgramState"

const   RenameFile =  ({SetFileSystem}:{ SetFileSystem: any}) =>  {
    const Meemory = useContext(MemProviderContext)
    const [sname , setname] = useState("")
    const file = Meemory && Meemory[0].length ? Meemory[0][Meemory[0].length - 1].file: null
    let  name = file ? file.name: ""
    useEffect(()=>{
        setname(name)
    },[name])
    const changeName = (e:any) =>{
        if (!file || e.which != 13)
            return 
        file.name = sname
        setname("")
        localStorage.setItem(file.id.toString() , JSON.stringify(file))
        SetFileSystem((files: file[]) => {
            const newStr = files.filter((f:file) => f.id != file.id)
            newStr.push(file)
            return newStr
        })
        document.getElementById("FileRename")?.classList.add("hidden")

        if (Meemory)
        Meemory[1]((state: ProgramState[]) => {
        const memup = state.slice()
        if (memup[memup.length - 1].state === ExecutionState.staged)
            memup.pop()
        return memup
        } )
    }
    const remove = (e:any) =>
    {
        document.getElementById("FileRename")?.classList.add("hidden")
        setname("")
    
    }
    return (
        <div id="FileRename" className=" hidden w-48 flex  flex-col justify-around items-center h-24 bg-contextMenu rounded-xl">
            <div className="flex flex-row justify-around items-center w-full">
            <h1 className="font-tahoma font-bold text-lg">
                Rename File
            </h1>
            <h1 onClick={(e) => remove(e) } className=" cursor-pointer text-center bg-red-600 border-white w-6 hover:font-bold"> X </h1>
            </div>
            <input onKeyDown={(e)=> changeName(e)} onChange={(e) => setname(e.target.value)} className="w-36 border-2 font-tahoma font-bold" value={sname} type="text" />
        </div>
    )
}
export default RenameFile
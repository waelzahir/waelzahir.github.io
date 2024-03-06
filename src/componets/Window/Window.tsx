import { useContext } from "react"
import MemProviderContext from "../../Context/MemContext"
import FileSystemContext from "../../Context/fileSystem"
import { ProgramState } from "../../types/ProgramState"
import { file } from "../../types/ProgramType"

const OpenWindows = (Memory :any) =>
{
    return Memory[0].map((exec: ProgramState) => {
        <>salam</>
    } )
}
const WindowIcons= (FileSystem:any)=>
{
    return FileSystem[0].forEach((value:file, key:number) => <>dalam</>)
}
const Window = () => {
    const Memory = useContext(MemProviderContext)
    const FileSystem = useContext(FileSystemContext)
    if (!Memory || !FileSystem)
        return null;
    return (
        <div id="Desktop" className="w-full flex-1">
            {OpenWindows(Memory)}
            {WindowIcons(FileSystem)}
        </div>
    )
}




export default Window
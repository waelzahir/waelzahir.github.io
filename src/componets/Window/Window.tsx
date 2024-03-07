import { useContext } from "react"
import MemProviderContext from "../../Context/MemContext"
import FileSystemContext from "../../Context/fileSystem"
import { ProgramState } from "../../types/ProgramState"
import { file } from "../../types/ProgramType"
import ProgramIcon from "./Files/file"

const OpenWindows = (Memory :any) =>
{
    return Memory[0].map((exec: ProgramState) => {
        <>salam</>
    } )
}
const WindowIcons= (FileSystem:Map<number, file>)=>
{
    return Array.from(FileSystem.entries()).map(([key, value]) => <ProgramIcon key={key} file={value}/>)
}
const Window = () => {
    const Memory = useContext(MemProviderContext)
    const FileSystem = useContext(FileSystemContext)
    if (!Memory || !FileSystem)
        return null;
    return (
        <div id="Desktop" className="w-full flex-1">
            {OpenWindows(Memory)}
            {WindowIcons(FileSystem[0])}
        </div>
    )
}




export default Window
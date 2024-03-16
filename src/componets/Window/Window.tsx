import { useContext, useState } from "react"
import MemProviderContext from "../../Context/MemContext"
import FileSystemContext from "../../Context/fileSystem"

import FileIcon from "./Files/file"
import { file } from "../../types/file"

// const OpenWindows = (Memory :any) =>
// {
//     return Memory[0].map((exec: ProgramState) => {
//         <>salam</>
//     } )
// }
const WindowIcons= (FileSystem:any, operand: [file | null, React.Dispatch<React.SetStateAction<file | null>>])=>
{
    const  root = (FileSystem[0] as Map<number, file>).get(0);
    if (root)
        return (root.content as number []).map((fid: number, key) => <FileIcon  operand={operand} key={key} file={(FileSystem[0] as Map<number, file>).get(fid)}/>)

    return null
}
const Window = () => {
    const Memory = useContext(MemProviderContext)
    const FileSystem = useContext(FileSystemContext)
    const operand = useState<file | null>(null)
    if (!Memory || !FileSystem)
        return null;
    return (
        <div id="Desktop" className="w-full h-full flex-1">
            {/* {OpenWindows(Memory)} */}
            {WindowIcons(FileSystem, operand)}
            
        </div>
    )
}




export default Window
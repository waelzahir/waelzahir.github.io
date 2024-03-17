import { useContext } from "react"
import FileSystemContext from "../../../Context/fileSystem"
import FileIcon from "../Files/file"

export const FolderComp =({ids, operand}: { ids : number[] ,operand:any}) =>{
    const filesys = useContext(FileSystemContext)
    
    const files = ids.map((fid:number) => {
        if (filesys && filesys[0].has(fid))
            return <FileIcon file={filesys[0].get(fid)} operand={operand}/>
    })
    return (
        <div className="w-full flex-1 grid grid-cols-3 gap-4 place-items-center overflow-y-scroll">
            {files}
        </div>
    )
}
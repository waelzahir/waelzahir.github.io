import { file, icon } from "../../../types/ProgramType";
import closedIcon from "../../../assets/FolderClosed.png"
import Internet from "../../../assets/Internet.png"
import Explorer from "../../../assets/Expolorer.png"
import text from "../../../assets/text.png"
import Trash from "../../../assets/trash.png"
import fullTrash from "../../../assets/TrashFull.png"

import { useContext, useEffect, useRef } from "react";

import FileSystemContext from "../../../Context/fileSystem";
import EnvirementContext from "../../../Context/EnvirementContext";


export const getIcon  = (ico: icon) => {
    
    switch (ico)
    {
        case icon.Folder:
            return closedIcon;
        case icon.Internet:
            return Internet;
        case icon.Explorer:
            return Explorer
        case icon.Text:
                return text;
        case icon.Trash:
            return Trash
        default :
            return null;
    }
}

const ProgramIcon = ({file}: {file: file}) => {
    const refer = useRef<HTMLDivElement>(null);
    const Envirment = useContext(EnvirementContext)
    
    if ( !Envirment)
        return ;
  
    const icon = getIcon(file.icon)
    const fitted = Envirment[0].iconsize === 1 ? 56 : Envirment[0].iconsize === 2 ? 70 : 90;
    return (
        <div ref={refer}  className={`absolute overflow-hidden w-20 h-20 flex flex-col justify-around items-center   rounded z-50`} style={{ height: `${80 + Envirment[0].iconsize * 10}px` }}>
            <div  className="w-full   flex justify-center items-center">
                <img style={{ height: `${fitted}px` }} src={icon} alt={file.name} />
            </div>
            <div >
                <h1  className="text-start font-tahoma text-xs font-bold text-black truncate">{file.name}</h1>
            </div>
        </div>
    );
};

export default ProgramIcon

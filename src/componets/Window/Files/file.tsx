import { file, icon } from "../../../types/ProgramType";
import closedIcon from "../../../assets/FolderClosed.png"
import Internet from "../../../assets/Internet.png"
import Explorer from "../../../assets/Expolorer.png"
import text from "../../../assets/text.png"
import Trash from "../../../assets/trash.png"
import fullTrash from "../../../assets/TrashFull.png"

import { useContext, useEffect, useRef, useState } from "react";
import { FileHandler } from "./FileHandler";
import MemProviderContext from "../../../Context/MemContext";


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

const ProgramIcon = ({menu, entries, size,operand, setoperand }: {menu:any, entries: file, size: number,operand:file|null, setoperand: any }) => {
    const refer = useRef<HTMLDivElement>(null);
    const Memory = useContext(MemProviderContext)
    

    useEffect(() => {
        if (!refer.current)
            return
        const handler = new FileHandler(refer.current, entries, setoperand, menu, Memory )
        return () =>
        {
            handler.removerLisners()
        }
        }, []);
    const icon =  entries.id === -1 && entries.content.length ?fullTrash :getIcon(entries.icon);
    const fited = size === 1 ? 56 : size === 2 ? 70 : 90;

    return (
        <div ref={refer}  className={`${operand && operand.id === entries.id ? "bg-ContextSelection" : "hover:bg-blue-200"} absolute overflow-hidden w-20 h-20 flex flex-col justify-around items-center   rounded z-50`} style={{ height: `${80 + size * 10}px` }}>
            <div  className="w-full   flex justify-center items-center">
                <img style={{ height: `${fited}px` }} src={icon} alt={entries.name} />
            </div>
            <div >
                <h1  className="text-start font-tahoma text-xs font-bold text-black truncate">{entries.name}</h1>
            </div>
        </div>
    );
};

export default ProgramIcon

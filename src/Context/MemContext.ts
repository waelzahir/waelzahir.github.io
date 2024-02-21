import { createContext, } from "react";
import { ProgramState } from "../types/ProgramState";


const MemProviderContext = createContext< [ProgramState[], React.Dispatch<React.SetStateAction<ProgramState[]>>] | null>(null)
export default MemProviderContext
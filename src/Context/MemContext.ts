import { createContext, } from "react";
import { ProgramState } from "../types/ProgramState";


const MemProviderContext = createContext<[Map<number, ProgramState>, React.Dispatch<React.SetStateAction<Map<number, ProgramState>>>] | null>(null)
export default MemProviderContext
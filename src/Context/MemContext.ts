import { createContext, } from "react";
import { LoadedProg } from "../types/Memory";


const MemProviderContext = createContext<[Map<number, LoadedProg>, React.Dispatch<React.SetStateAction<Map<number, LoadedProg>>>] | null>(null)
export default MemProviderContext
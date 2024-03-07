import { createContext, } from "react";
import { InitState } from "../types/GlobalMetadata";


const EnvirementContext = createContext< [InitState, React.Dispatch<React.SetStateAction<InitState>>]| null>(null)
export default EnvirementContext
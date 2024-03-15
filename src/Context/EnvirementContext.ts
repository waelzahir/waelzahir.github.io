import { createContext, } from "react";
import { Envirment } from "../types/Envirment";


const EnvirementContext = createContext< [Envirment, React.Dispatch<React.SetStateAction<Envirment>>]| null>(null)
export default EnvirementContext
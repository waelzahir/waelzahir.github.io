import { createContext, } from "react";
import { file } from "../types/file";


const FileSystemContext = createContext< [Map<number, file>, React.Dispatch<React.SetStateAction<Map<number, file>>>] | null>(null)
export default FileSystemContext
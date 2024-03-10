import { useRef } from "react";
import { file, icon } from "../../../types/ProgramType";

const FileIcon = ({file}: {file: file}) => {
    const refer = useRef<HTMLDivElement>(null);
    return (
        <div ref={refer}></div>
    );
};

export default FileIcon

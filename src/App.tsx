
import {  useEffect, useState } from "react";
import NaviBar from "./componets/NaviBar/Navbar";
import Window from "./componets/Window/Window";
import { file } from "./types/ProgramType";
import { Desktop } from "./Metadata/projects";
import { ProgramState } from "./types/ProgramState";
import MemProviderContext from "./Context/MemContext";
import StartMenu from "./componets/StartMenu";
import FileSystemContext from "./Context/fileSystem";
import { GlobalMetadata, InitState, defaultState } from "./types/GlobalMetadata";
import WelcomePage from "./componets/InitScreen";

export var highestid :GlobalMetadata = { id :0, zindex: 100, exec: 0} 

function App() {
  const Memory = useState<ProgramState []>(new Array())
  const FileSystem = useState<Map <number , file>>(new Map)
  const initState =  useState<InitState>(defaultState)

  
cd 

  return ( 
      <MemProviderContext.Provider value={Memory}>
        <FileSystemContext.Provider value={FileSystem}>
          <SystemStart />
        </FileSystemContext.Provider>
      </MemProviderContext.Provider>
  )
}

const SystemStart = () => {
  return (
    <div className=" h-screen w-full flex flex-col overflow-hidden">
      <Window />
      <NaviBar />
      <StartMenu/>
    </div>
  )
}
export default App

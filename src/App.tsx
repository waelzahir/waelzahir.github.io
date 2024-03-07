
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
import EnvirementContext from "./Context/EnvirementContext";
import { useStartSystem } from "./hooks/useStartSystem";

export var highestid :GlobalMetadata = { id :0, zindex: 100, exec: 0} 

function App() {
  const Memory = useState<ProgramState []>(new Array())
  const FileSystem = useState<Map <number , file>>(new Map)
  const initState =  useState<InitState>(defaultState)

  useStartSystem(FileSystem[1], initState[1]);
  // if (initState[0].user === -1)
  //     return <WelcomePage InitState={initState}/>
  return ( 
      <MemProviderContext.Provider value={Memory}>
        <EnvirementContext.Provider value={initState}>
          <FileSystemContext.Provider value={FileSystem}>
            <SystemStart />
          </FileSystemContext.Provider>
        </EnvirementContext.Provider>
      </MemProviderContext.Provider>
  )
}

const SystemStart = () => {
  return (
    <div className=" h-screen w-full flex flex-col overflow-hidden">
      <Window />
      <StartMenu/>
      <NaviBar />
    </div>
  )
}
export default App

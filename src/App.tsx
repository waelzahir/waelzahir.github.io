
import {  useEffect, useState } from "react";
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
import { useSetBackground } from "./hooks/Background";
import Dock from "./componets/Dock";

export var highestid :GlobalMetadata = { id :0, zindex: 100, exec: 0} 
const Resize = (dock:any) =>{
    
    dock.style.top = (window.innerHeight - 70 ) + "px"
    dock.style.left = ((window.innerWidth  / 2) - (dock.getBoundingClientRect().width / 2)) + "px"
       

}
function App() {
  const Memory = useState<ProgramState []>(new Array())
  const FileSystem = useState<Map <number , file>>(new Map)
  const initState =  useState<InitState>(defaultState)


  useStartSystem(FileSystem[1], initState[1]);
  useSetBackground(initState[0])
  useEffect(() =>{
    const dock = document.getElementById("dock");
    if (!dock)
      return
    dock.style.top = (window.innerHeight - 105 ) + "px"
    dock.style.left = ((window.innerWidth  / 2) - (dock.getBoundingClientRect().width / 2)) + "px"   
    window.addEventListener("resize", () => Resize(dock))
    return () =>{
      if (dock)
      window.removeEventListener("resize", () => Resize(dock))
    }
  }, [Memory[0], FileSystem[0]])
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
    <div className=" h-screen w-full overflow-hidden">
      <div className="h-full w-full flex flex-col">

        <Window />
        <StartMenu/>
        <Dock />
      </div>
    </div>
  )
}
export default App

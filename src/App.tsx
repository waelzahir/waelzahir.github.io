
import {  useEffect, useState } from "react";
import Window from "./componets/Window/Window";
import MemProviderContext from "./Context/MemContext";
import FileSystemContext from "./Context/fileSystem";
import EnvirementContext from "./Context/EnvirementContext";
import { useStartSystem } from "./hooks/useStartSystem";
import { useSetBackground } from "./hooks/Background";
import Dock from "./componets/Dock";
import { file } from "./types/file";
import { Envirment } from "./types/Envirment";
import { useGetProjects } from "./hooks/getProjects";

const env :Envirment ={
  Background:0,
  process:0,
  fileid:0
}

const Resize = (dock:any) =>{
    
    dock.style.top = (window.innerHeight - 70 ) + "px"
    dock.style.left = ((window.innerWidth  / 2) - (dock.getBoundingClientRect().width / 2)) + "px"
       

}
function App() {
  const Memory = useState<any []>(new Array())
  const FileSystem = useState<Map <number , file>>(new Map)
  const Envirement =  useState<Envirment>(env)


  useStartSystem(FileSystem[1], Envirement[1]);
  useSetBackground(Envirement[0])
  useGetProjects(FileSystem[1], Envirement[1])
  console.log(FileSystem[0])
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
        <EnvirementContext.Provider value={Envirement}>
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
        <Dock />
      </div>
    </div>
  )
}
export default App

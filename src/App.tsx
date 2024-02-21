
import {  useEffect, useState } from "react";
import NaviBar from "./componets/NaviBar/Navbar";
import Window from "./componets/Window/Window";
import { file } from "./types/ProgramType";
import { Desktop } from "./Metadata/projects";
import { ProgramState } from "./types/ProgramState";
import MemProviderContext from "./Context/MemContext";
export var highestid = { id :0} 


function App() {
  const Memory = useState<ProgramState []>(new Array)
  const [FileSystem, SetFileSystem] = useState<file []>(new Array())
  useEffect( () => {
    
    if (localStorage.getItem("State"))
    {
      const oldstate = localStorage.getItem("State")
      if (oldstate && oldstate.length)
        Memory[1](JSON.parse(oldstate))
    }
    if (!localStorage.getItem("first"))
    {
      SetFileSystem(Desktop)
      Desktop.map((file:file) => localStorage.setItem(file.id.toString(), JSON.stringify(file)))
      highestid.id = Math.max(...Desktop.map(obj => obj.id));
      highestid.id++;
      localStorage.setItem("first", "no")
    }
    else
    {
      const objects : file[] = []
      Object.keys(localStorage).map((key:string)=> {
        let file: string | null = "";
        if (Number.isInteger(+key))
          file = localStorage.getItem(key)
        if ( typeof file === "string" && file.length)
          objects.push(JSON.parse(file))
        return ""
      })
      SetFileSystem(objects)
      highestid.id = Math.max(...objects.map(obj => obj.id));
      highestid.id++;

    }
    
  }, [])

  console.log(Memory[0])

  return ( 
    <div className="select-none max-w-full w-full h-screen flex flex-col overflow-hidden">
      <MemProviderContext.Provider value={Memory}>
        <Window FileSystem={FileSystem} SetFileSystem={SetFileSystem} />
        <NaviBar />
      </MemProviderContext.Provider>
    </div>
  )
}

export default App


import {  useEffect, useState } from "react";
import NaviBar from "./componets/NaviBar/Navbar";
import Window from "./componets/Window/Window";
import { file } from "./types/ProgramType";
import { Desktop } from "./Metadata/projects";
import { ProgramState } from "./types/ProgramState";
import MemProviderContext from "./Context/MemContext";
import FileSystemContext from "./Context/fileSystem";
import StartMenu from "./componets/StartMenu";
type highes = {
  id:number
  zindex:number,
  exec  :number
}
export var highestid :highes = { id :0, zindex: 100, exec: 0} 

function App() {
  const Memory = useState<ProgramState []>(new Array())
  const [FileSystem, SetFileSystem] = useState<Map <number , file>>(new Map)
  
  useEffect( () => {
  
    if (localStorage.getItem("State"))
    {
      const oldstate = localStorage.getItem("State")
      if (oldstate && oldstate.length)
        Memory[1](JSON.parse(oldstate))
    }
    if (!localStorage.getItem("INIT"))
    {
      Desktop.map((F:file)=> {
          FileSystem.set(F.id, F)
          localStorage.setItem(F.id.toString(), JSON.stringify(F))
          highestid.id =  highestid.id > F.id ?highestid.id : F.id ;
      })
      localStorage.setItem("INIT","fsddf")
    }
    else
    {
      console.log("from storage")
      Object.keys(localStorage).map((key:string)=> {
        let file: string | null = "";
        if (Number.isInteger(+key))
         {
            file = localStorage.getItem(key)
            console.log("storage", file)
            if ( typeof file === "string" && file.length)
              {
                FileSystem.set(+key, JSON.parse(file))
                highestid.id =  highestid.id > +key ?highestid.id :+key ;
              }
         }
      })
    }
    highestid.id++;

    SetFileSystem(new Map(FileSystem))
    
  }, [])

  console.log("memory",Memory[0])
  console.log("file system", FileSystem)


  return ( 
    <div className="select-none max-w-full w-full h-screen flex flex-col overflow-hidden">
      <MemProviderContext.Provider value={Memory}>
        <Window FileSystem={FileSystem} SetFileSystem={SetFileSystem} />
        <NaviBar />
        <StartMenu/>
      </MemProviderContext.Provider>
    </div>
  )
}

export default App


import { useEffect, useState } from "react";
import NaviBar from "./componets.tsx/NaviBar/Navbar";
import Window from "./componets.tsx/Window/Window";
import { file } from "./types/ProgramType";
import { Desktop } from "./Metadata/projects";
export var highestid = { id :0} 


function App() {
  const [FileSystem, SetFileSystem] = useState<file []>(new Array())
  useEffect( () => {
    const files = localStorage.getItem("files") 
      if (files == null)
      {
        SetFileSystem(Desktop)
        localStorage.setItem("files", JSON.stringify(Desktop))
        highestid.id = Math.max(...Desktop.map(obj => obj.id));
        highestid.id++;
      }
      else
      {
        const existing: file[] = JSON.parse(files)
        SetFileSystem(existing) 
        highestid.id = Math.max(...existing.map(obj => obj.id));
        highestid.id++;

      }
      
  }, [])

  return ( 
    <div className="select-none max-w-full w-full h-screen flex flex-col overflow-hidden">
      <Window FileSystem={FileSystem} SetFileSystem={SetFileSystem} />
      <NaviBar />
    </div>
  )
}

export default App

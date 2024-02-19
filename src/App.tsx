
import { useEffect, useState } from "react";
import NaviBar from "./componets.tsx/NaviBar/Navbar";
import Window from "./componets.tsx/Window/Window";
import { file } from "./types/ProgramType";
import { Desktop } from "./Metadata/projects";


function App() {
  const [FileSystem, SetFileSystem] = useState<file []>(new Array())
  useEffect( () => {
    const files = localStorage.getItem("files") 
      if (files == null)
      {
        SetFileSystem(Desktop)
        localStorage.setItem("files", JSON.stringify(Desktop))
        console.log("Default")

      }
      else
      {
        const existing = JSON.parse(files)
        SetFileSystem(existing) 
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

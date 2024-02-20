
import { useEffect, useState } from "react";
import NaviBar from "./componets.tsx/NaviBar/Navbar";
import Window from "./componets.tsx/Window/Window";
import { file } from "./types/ProgramType";
import { Desktop } from "./Metadata/projects";
export var highestid = { id :0} 


function App() {
  const [FileSystem, SetFileSystem] = useState<file []>(new Array())
  const Metadata = useState(0) 
  useEffect( () => {
    if (!localStorage.length)
        localStorage.setItem("Metadata", JSON.stringify(Metadata[0]))
    if (localStorage.length < 2)
    {
      SetFileSystem(Desktop)
      Desktop.map((file:file) => localStorage.setItem(file.id.toString(), JSON.stringify(file)))
      highestid.id = Math.max(...Desktop.map(obj => obj.id));
      highestid.id++;

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

  return ( 
    <div className="select-none max-w-full w-full h-screen flex flex-col overflow-hidden">
      <Window FileSystem={FileSystem} SetFileSystem={SetFileSystem} />
      <NaviBar />
    </div>
  )
}

export default App

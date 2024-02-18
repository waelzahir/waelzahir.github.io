import { useState } from "react"
import { Navbar } from "./Components/Navbar";
import { Selection } from "./Components/Selection";
import AllProjects from "./Metadata/projects";
import { useGetProjects } from "./hooks/getProjects";

function App() {
  const [active, setActive] = useState(0);
  const [, setupdate] = useState(false)
  useGetProjects(setupdate, AllProjects);
  console.log(AllProjects)
  return ( 
    <div className="select-none max-w-full w-full h-screen flex justify-center items-center overflow-hidden bg-ndbackground">
      <div className="w-[95%] h-[95%] flex items-center justify-center bg-background">
        <div className="w-[95%] h-[95%] flex flex-col md:flex-row overflow-hidden ">
          <Navbar active={active} setActive={setActive}/>
          <Selection active={active}/>
        </div>
      </div>
    </div>
  )
}

export default App

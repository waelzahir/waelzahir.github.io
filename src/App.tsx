
import { useEffect } from "react";
import NaviBar from "./componets.tsx/NaviBar/Navbar";
import Window from "./componets.tsx/Window/Window";


function App() {

  return ( 
    <div className="select-none max-w-full w-full h-screen flex flex-col overflow-hidden">
      <Window />
      <NaviBar />
    </div>
  )
}

export default App

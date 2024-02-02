import { useState } from "react"
import ContactMe from "./Componets/ContactMe"
import Content from "./Componets/Content"
import SideBar from "./Componets/Sidebar"


function App() {
  const [click, setClick] = useState(-1)
  return (
    <div  className='h-screen w-full flex overflow-hidden md:flex-row flex-col gap-6 items-center '>  
      <SideBar choiceset={setClick}/>
      <Content choice={click}/>
      <ContactMe/>
    </div>
  )
}

export default App

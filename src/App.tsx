import { useState } from "react"
import Content from "./Components/Content/Content"
import Header from "./Components/Header/Header"
import Navigation from "./Components/Navigation/Navigation"


export const App = () => {
  const state = useState(0)
  return (
    <div className="w-full h-screen flex justify-center items-center border-black border-[5px] md:border-[10px] border-opacity-10  overflow-hidden ">  
      <div className="h-[95%] w-[95%] md:h-[85%] md:w-[85%] bg-white bg-opacity-[10%] flex  flex-col  items-center">
        <Header/>
        <Navigation  navigate={state[1]}/>
        <Content choice={state[0]}/>
      </div>
    </div>
  )
}
export default App
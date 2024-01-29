import {   useEffect, useState } from 'react'
import { MainComp } from './MainComp/MainComp'
import { FooterComp } from './FooterComp/FooteComp'
import { SideBar } from './MainComp/SideBar/SideBar'

function App() {
  
  const [width, setwidth] = useState(window.innerWidth  / 6)
  useEffect(() => {
          let mainclicked = false;
          let prevw = window.innerWidth
          document.getElementById("sdresize")?.addEventListener("mousedown", () => mainclicked = true)
          window.addEventListener("mouseup", () => mainclicked = false)
          window.addEventListener("resize", () => 
          {
            const scale =  window.innerWidth / prevw;
            setwidth(scale*  width)
            prevw = window.innerWidth
          })
          window.addEventListener("mousemove", (e) =>
          {
              if (mainclicked && e.clientX > window.innerWidth/ 10 && e.clientX < window.innerWidth  / 3 )
                setwidth(e.clientX)
          })  
          return () =>
          {
              document.getElementById("sdresize")?.removeEventListener("mousedown", () => mainclicked = true)
              window.removeEventListener("mouseup", () => mainclicked = false)
              window.removeEventListener("mousemove", (e) =>
              {
                if (mainclicked && e.clientX > window.innerWidth/ 10 && e.clientX < window.innerWidth  / 3 )
                setwidth(e.clientX)
              })     
              }
      }, [])
  return (
      <div className='w-full h-screen flex flex-row'>
         <SideBar  width={width}/>
         <div id='sdresize' className="w-1 h-full cursor-col-resize bg-white"></div>
         <MainComp />
      </div>  
  )
}

export default App

import {   useEffect, useState } from 'react'
import { MainComp } from './MainComp/MainComp'
import { FooterComp } from './FooterComp/FooteComp'

function App() {
   const [height, setheight] = useState(window.innerHeight  / 10)
   useEffect(() => {
      let APPclicked = false;
      document.getElementById("mainresize")?.addEventListener("mousedown", () => APPclicked = true)
      window.addEventListener("mouseup", () => APPclicked = false)
      window.addEventListener("mousemove", (e) =>
      {
         if (APPclicked )
            setheight( window.innerHeight - e.clientY ) 
      })  
      return () =>
      {
          document.getElementById("mainresize")?.removeEventListener("mousedown", () => APPclicked = true)
          window.removeEventListener("mouseup", () => APPclicked = false)
          window.removeEventListener("mousemove", (e) =>
          {
            if (APPclicked)
            setheight( window.innerHeight - e.clientY ) 
          })     
          }
  }, [])
  return (
      <div className='w-full h-screen flex flex-col'>
         <MainComp />
         <div id='mainresize' className='bg-white h-1 cursor-row-resize'>
         </div>
         <FooterComp pxHeight={height}/>
      </div>  
  )
}

export default App

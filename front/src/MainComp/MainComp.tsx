import { useEffect, useRef, useState } from "react"
import { SideBar } from "./SideBar/SideBar"
import { Window } from "./Window/Window"
import { FooterComp } from "../FooterComp/FooteComp"


export const MainComp = () =>
{
    const [height, setheight] = useState(window.innerHeight  / 10)
    useEffect(() => {
      let APPclicked = false;
      let prevw = window.innerHeight

      document.getElementById("mainresize")?.addEventListener("mousedown", () => APPclicked = true)
      window.addEventListener("resize", () => 
      {
        const scale =  window.innerHeight / prevw;
        setheight(scale * height)
        prevw = window.innerHeight
      })
      window.addEventListener("mouseup", () => APPclicked = false)
      window.addEventListener("mousemove", (e) =>
      {
         if (APPclicked && (window.innerHeight - e.clientY) >= window.innerHeight/ 9 && (window.innerHeight - e.clientY) < window.innerHeight  / 2)
            {
              setheight( window.innerHeight - e.clientY )
            }

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
        <div id="maincomp" className="w-full h-full bg-slate-500 flex flex-col">
            <Window />
            <div id='mainresize' className='bg-white h-1 cursor-row-resize'></div>
            <FooterComp height={height}/>

        </div>
    )
}
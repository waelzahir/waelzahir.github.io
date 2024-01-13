import {   useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Legacy } from './components/legacy/Legacy'
import { vector } from './types/Cordinates'
import { Latest } from './components/latest/Latest'
import { Overview } from './components/Overview/Overview'
import { DialogBox } from './components/main/DialogBox'


function App() {
  const [view, setview] = useState<vector>({ x: window.innerWidth, y :window.innerHeight})

  useEffect(()=>{
    addEventListener("resize", (event) => {
        const newview: vector = {
          x : window.innerWidth,
          y : window.innerHeight
        } 
        setview(newview)
    });

  })
  return (
    <BrowserRouter>
       <DialogBox />
       <Routes>
           <Route path="/"  element={<Overview/>} />
          <Route path="/legacy"  element={<Legacy/>} />
          <Route path="/latest"  element={<Latest/>} />
       </Routes>
      </BrowserRouter>
  )
}

export default App

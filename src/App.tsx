import { useEffect, useState } from 'react'
import test from "./assets/test.jpeg"
import Enter from './assets/enter'
import Github from './assets/github'
import Twitter from './assets/twitter'
import Linkedin from './assets/Linkedin'

function App() {
  const [dark, setdark] = useState(true)
  const [navigation, setNavigation] = useState(0)

  return (    
    <div className={`min-h-screen h-screen w-full ${dark ? "bg-Darkbg text-DarkText" : "bg-Lightbg text-LightText"} flex md:flex-row flex-col`}>
      <div className='h-full w-full md:w-[35rem] flex flex-col justify-start items-center px-10 gap-y-4'>
        <div className='flex  justify-center pt-16'>
          <img className="w-44 h-44 border-2" src={test} alt="" />
        </div>
        <div className='w-full flex  justify-center'>
          <h1 className='font-egoist text-2xl'>Ouail Zahir</h1>
        </div>
        <div className='w-full flex  justify-center'>
          <h1 className='font-egoist text-xl '>LOREM IPSUM</h1>
        </div>
        <div className='gap-y-2 pl-4 '>
                  <div onClick={() => setNavigation(0)} className='flex h-8 justify-start items-center gap-x-2 cursor-pointer'>
                    <Enter color={navigation === 0 ? dark ? "#fcfcfc" : "#2D2D2D" : "#E0E0E0" }/>
                    <h1 className={`${navigation !== 0 ? "text-gray-300": "" } font-egoist font-bold text-sm`}>About</h1>
                  </div>
                  <div onClick={() => setNavigation(1)}  className='flex h-8 justify-start items-center gap-x-2 cursor-pointer'>
                    <Enter color={navigation === 1 ? dark ? "#fcfcfc" : "#2D2D2D" : "#E0E0E0" }/>
                    <h1 className={`${navigation !== 1 ? "text-gray-300": "" } font-egoist font-bold text-sm`}>Skills</h1>
                  </div>
                  <div  onClick={() => setNavigation(2)} className='flex h-8 justify-start items-center gap-x-2 cursor-pointer'>
                  <Enter color={navigation === 2 ? dark ? "#fcfcfc" : "#2D2D2D" : "#E0E0E0" }/>
                    <h1 className={`${navigation !== 2 ? "text-gray-300": "" } font-egoist font-bold text-sm`}>Projects</h1>
                  </div>
                  <div  onClick={() => setNavigation(3)} className='flex h-8 justify-start items-center gap-x-2 cursor-pointer'>
                    <Enter color={navigation === 3 ? dark ? "#fcfcfc" : "#2D2D2D" : "#E0E0E0" }/>
                    <h1 className={`${navigation !== 3 ? "text-gray-300": "" } font-egoist font-bold text-sm`}>Contact</h1>
                  </div>
        </div>
        <div className=''>
          <div className='flex h-8 justify-start items-center gap-x-2'>
                      <Github color={dark ? "#fcfcfc" : "#2D2D2D"}/>
                      <h1 className='font-egoist font-bold text-sm'><a className='font-mono'>@</a>waelzahir</h1>
          </div>
          <div className='flex h-8 justify-start items-center gap-x-2'>
                      <Twitter color={dark ? "#fcfcfc" : "#2D2D2D"}/>
                      <h1 className='font-egoist font-bold text-sm'><a className='font-mono'>@</a>__OUAIL__</h1>
          </div>
          <div className='flex h-8 justify-start items-center gap-x-2'>
                      <Linkedin color={dark ? "#fcfcfc" : "#2D2D2D"}/>
                      <h1 className='font-egoist font-bold text-sm'><a className='font-mono'>@</a>waelzahir</h1>
          </div>
        </div>
      </div>
      <div className='h-full w-full border-2'>
      </div>
    </div>
  )
}

export default App

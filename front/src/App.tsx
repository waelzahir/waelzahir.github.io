import {   useEffect, useState } from 'react'
import { MainComp } from './MainComp/MainComp'
import { FooterComp } from './FooterComp/FooteComp'
import { SideBar } from './MainComp/SideBar/SideBar'

function App() {
  
  
  return (
    <div className='w-full h-screen flex flex-col'>
       <div className='bg-black h-[2%]'> </div>
      <div className='w-full h-full flex flex-row overflow-y-hidden' >
        <div className='bg-gray-600 w-[2%]'></div>
         <SideBar />
         <div id='sdresize' className="w-1 h-full  bg-gray-600"></div>
         <MainComp />
      </div>  
      <div className='bg-gray-600 h-[2%]'>
      </div>
    </div>
  )
}

export default App

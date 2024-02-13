import { useEffect, useState } from 'react'
import chopper from "./assets/chopper.webp"
import Enter from './assets/enter'
import Github from './assets/github'
import Twitter from './assets/twitter'
import Linkedin from './assets/Linkedin'
import Navigation from './Components/Navigation'
import ThemeSwitch from './Components/darktoggle'
import Socials from './Components/Socials'
import Info from './Components/Info'
import About from './Components/content/About'
import Skills from './Components/content/Skills'
import Projects from './Components/content/Projects'
import Contact from './Components/content/Contact'
import Resume from './Components/Resume'

function App() {
  const [dark, setdark] = useState(false)
  const [navigation, setNavigation] = useState(-1)
  useEffect(()=> {
    window.addEventListener("scroll", () => {
        if ( Math.floor(scrollY / window.innerHeight) != navigation)
          setNavigation(Math.floor(scrollY / window.innerHeight))
    })
    return () => {
      window.removeEventListener("scroll", () => {
        if ( Math.floor(scrollY / window.innerHeight) != navigation)
          setNavigation(Math.floor(scrollY / window.innerHeight))
    })
    }
  }, [])

  return (    
    <div className={`min-h-screen h-full w-full ${dark ? "bg-Darkbg text-DarkText" : "bg-Lightbg text-LightText"} flex md:flex-row flex-col transition ease-in-out delay-150 overflow-hidden`}>
      <div className='h-20 w-full flex  justify-end items-center pr-4 fixed'>
        <ThemeSwitch mode={dark} setswitch={setdark} />
      </div>
      <div className='h-screen w-full md:w-[35rem] '>
        <div className='w-full h-full   '>
          <div className='md:fixed flex flex-col justify-start items-center px-10 gap-y-4'>
            <Info />
            <Navigation dark={dark} Navigation={navigation}  />
            <Socials dark={dark}/>
            <Resume dark={dark}/>
          </div>
        </div>
      </div>
      <div className='w-full'>
          <Projects dark={dark}/>
          <Skills dark={dark}/>
          <Contact dark={dark}/>
      </div>
    </div>
  )
}

export default App

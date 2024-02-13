import Linkedin from "../assets/Linkedin"
import Github from "../assets/github"
import Twitter from "../assets/twitter"

const Socials = ({dark} : {dark:boolean}) =>{
    return (
        <div className='w-44'>
            <div className='flex h-8 justify-start items-center gap-x-2'>
                <Github color={dark ? "#fcfcfc" : "#2D2D2D"}/>
                <a href="https://github.com/waelzahir/" target="_blank">
                    <h1 className=' font-egoist font-bold text-sm hover:text-green-400 cursor-pointer'><a className='font-mono'>@</a>waelzahir</h1>
                </a>
            </div>
            <div className='flex h-8 justify-start items-center gap-x-2'>
                        <Twitter color={dark ? "#fcfcfc" : "#2D2D2D"}/>
                        <a href="https://twitter.com/__OUAIL__" target="_blank">
                            <h1 className='font-egoist font-bold text-sm  hover:text-green-400 cursor-pointer'><a className='font-mono '>@</a>__OUAIL__</h1>
                        </a>
            </div>
            <div className='flex h-8 justify-start items-center gap-x-2'>
                <Linkedin color={dark ? "#fcfcfc" : "#2D2D2D"}/>
                <a href="https://www.linkedin.com/in/waelzahir/" target="_blank">
                      <h1 className='font-egoist font-bold text-sm  hover:text-green-400 cursor-pointer'><a className='font-mono'>@</a>waelzahir</h1>
                </a>
            </div>
       
        </div>
    )
}

export default Socials
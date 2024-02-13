import Enter from "../assets/enter"

const Navigation  = ({dark, Navigation }: {dark:boolean, Navigation:number}) =>
{
    return (
        <div className='gap-y-2 pl-4 w-44'>
            <a href="#project">
              <div   className='flex h-8 justify-start items-center gap-x-2 cursor-pointer transition ease-in-out delay-150'>
              <Enter color={Navigation === 0 ? dark ? "#fcfcfc" : "#2D2D2D" : "#E0E0E0" }/>
                <h1 className={`${Navigation !== 0 ? "text-gray-500": "" } font-egoist font-bold text-sm`}>Projects</h1>
              </div>
            </a>
            <a href="#skill">
              <div   className='flex h-8 justify-start items-center gap-x-2 cursor-pointer transition ease-in-out delay-150'>
                <Enter color={Navigation === 1 ? dark ? "#fcfcfc" : "#2D2D2D" : "#E0E0E0" }/>
                <h1 className={`${Navigation !== 1 ? "text-gray-500": "" } font-egoist font-bold text-sm`}>Skills</h1>
              </div>
            </a>
            <a href="#contact">
              <div   className='flex h-8 justify-start items-center gap-x-2 cursor-pointer transition ease-in-out delay-150'>
                <Enter color={Navigation === 2 ? dark ? "#fcfcfc" : "#2D2D2D" : "#E0E0E0" }/>
                <h1 className={`${Navigation !== 2 ? "text-gray-500": "" } font-egoist font-bold text-sm`}>Contact</h1>
              </div>
            </a>
        </div>
    )
}

export default Navigation
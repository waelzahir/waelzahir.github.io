
const ThemeSwitch = ({mode, setswitch } :{mode: boolean, setswitch: any}) =>{
    return (
        <div className={`flex  items-center ${mode?"bg-Lightbg flex-row":"bg-Darkbg flex-row-reverse"} w-[80px] h-[30px] rounded-[50px] px-3 justify-between fixed`}>
                      <h1 className={`${mode? "text-LightText" : "text-DarkText"} font-egoist font-bold text-center`}>{mode ? "day" : "night"}</h1>

                <div onClick={() => setswitch(!mode)} className={`${mode?"bg-Darkbg":"bg-Lightbg"} w-[14px] h-[14px] rounded-[100%] cursor-pointer  transition ease-in-out delay-150 relative`}>
                </div>
        </div>
    )
}

export default ThemeSwitch
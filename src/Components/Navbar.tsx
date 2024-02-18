export const Navbar = (props : any) =>
{
    return (
        <div className=" flex md:flex-col md:justify-start items-center text-xs md:text-sm text-integrator">
            <div className="md:h-96 flex justify-center items-center md:w-36 w-full">
            <div className=" w-full h-14 md:h-48 flex md:flex-col justify-around items-center">
                <div 
                onClick={() => props.setActive(0)}
                className={`${props.active==0 ? "text-SecondaryText text-sm md:text-xl" : ""} cursor-pointer font-egoist font-bold `}>
                    About
                </div>
                <div
                onClick={() => props.setActive(1)}
                className={`${props.active==1 ? "text-SecondaryText text-sm md:text-xl" : ""}  cursor-pointer font-egoist font-bold `}>
                    Projects
                </div>
                <div
                onClick={() => props.setActive(2)}
                className={`${props.active==2 ? "text-SecondaryText text-sm md:text-xl" : ""} cursor-pointer font-egoist font-bold `}>
                    Contact
                </div>
            </div>
            </div>

        </div>
    )
}
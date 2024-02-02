import Pepe from "../assets/pepe.png"
const SideBar = ({choiceset}:{choiceset:any}) => {
    return (
    <div className="flex md:flex-col md:h-full h-16 items-center justify-evenly md:w-1/4 w-full">
            <div className="">
                <h1 onClick={() => choiceset((prev: number) => prev === -1 || prev !== 0 ? 0 : -1)} className=" font-extrabold text-BarsColor cursor cursor-pointer hover:grayscale">About Me</h1>
            </div>
            <div className="">
                <h1 onClick={() => choiceset((prev: number) => prev === -1 || prev !== 1 ? 1 : -1)} className="font-extrabold text-BarsColor cursor cursor-pointer hover:grayscale">Skills</h1>
           </div>
            <div className="">
                <h1  onClick={() => choiceset((prev: number) => prev === -1 || prev !== 2 ? 2 : -1)} className="font-extrabold text-BarsColor cursor cursor-pointer hover:grayscale">Projects</h1>
            </div>
       
            <div className="">
                <h1  onClick={() => choiceset((prev: number) => prev === -1 || prev !== 3  ? 3 : -1)} className="font-extrabold text-BarsColor cursor-pointer hover:grayscale"> Get in touch</h1>
            </div>

    </div>
    )
}
export default SideBar;
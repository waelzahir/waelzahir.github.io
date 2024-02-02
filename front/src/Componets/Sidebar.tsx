import Pepe from "../assets/pepe.png"
const SideBar = ({choiceset}:{choiceset:any}) => {
    return (
    <div className="flex md:flex-col md:h-full h-16 items-center justify-evenly md:w-1/4 w-full">
        
            <div className="bg-Background rounded  md:w-44 w-24 h-12 flex justify-center items-center ">
                <h1 onClick={() => choiceset((prev: number) => prev === -1 || prev !== 0 ? 0 : -1)} className="font-extrabold text-Orange cursor cursor-pointer hover:text-Green">About Me</h1>
            </div>
            <div className="bg-Background rounded   md:w-44 w-24 h-12 flex justify-center items-center ">
                <h1 onClick={() => choiceset((prev: number) => prev === -1 || prev !== 1 ? 1 : -1)} className="font-extrabold text-Orange cursor cursor-pointer hover:text-Green">Skills</h1>
           </div>
            <div className="bg-Background rounded   md:w-44 w-24 h-12 flex justify-center items-center ">
                <h1  onClick={() => choiceset((prev: number) => prev === -1 || prev !== 2 ? 2 : -1)} className="font-extrabold text-Orange cursor cursor-pointer hover:text-Green">Projects</h1>
            </div>
       
            <div className="bg-Background rounded  md:w-44 w-24 h-12 flex justify-center items-center ">
                <h1  onClick={() => choiceset((prev: number) => prev === -1 || prev !== 3  ? 3 : -1)} className="font-extrabold text-Orange cursor cursor-pointer hover:text-Green"> Contact </h1>
            </div>
  

    </div>
    )
}
export default SideBar;
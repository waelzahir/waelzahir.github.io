import Eye from "../../assets/Eye"

const About  = ({dark} : {dark: boolean} ) => 
{
    return (
        <div id="about" className="w-full   h-screen flex flex-col  pt-9 items-center ">
            <div className="w-[95%] pl-4 h-6 flex items-center gap-x-4">
                <Eye  color={`${dark ? "#fcfcfc" : "#2D2D2D"}`}/>
                <h1 className="text-center font-egoist text-2xl">About me</h1>
            </div>
            <div className="w-[95%] h-full flex flex-col justify-center items-center pt-12 ju">
                <div className={` w-full h-full rounded flex  items-center`}>
                    <div className={` ${dark ? "bg-Darkndbg" : "bg-Lightndbg"} w-full h-[40%] items-center flex flex-col text-xl justify-around `}>
                            <h1 className=" h-55 w-full text-center ">
                               Hi There, I'm  <a className="text-5xl text-gray-700">Ouail Zahir</a>
                            </h1>
                            <div className="w-[70%] h-64 flex  flex-col justify-around items-center">
                                        <h1 className="w-full text-start">
                                            A Software Devoloper Based of Morroco.
                                        </h1>
                                        <h1  className="w-full text-start">
                                            Through my portfolio, I invite you to explore the projects I've worked on and the ideas that pushed me to the boundaries of what's possible.
                                        </h1>
                                        <h1  className="w-full text-start">
                                            Let's code the future together!
                                        </h1>
                            </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
export default About
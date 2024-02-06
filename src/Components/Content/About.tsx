import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import twitter from "../../assets/twitter.svg"
import Pepe from "../../assets/Pepe.png"



const About = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center ">
           <div className="w-full h-full flex md:flex-row flex-col  border-border border-opacity-50 border-2 border-y-0 ">
                <div className="w-full md:w-[50%] h-[30%] md:h-full flex justify-center items-center   border-border border-opacity-50 border-2">
                    <div className="w-[90%] h-[90%] border-border border-opacity-50 border-2 flex justify-center items-center">
                        <img className="md:w-full h-full  aspect-square"src={Pepe}/>
                    </div>
                </div>
                <div className="w-full h-full flex justify-center items-center  border-border border-opacity-50 border-2">
                    <div className="w-[90%] h-[90%]  border-border border-opacity-50 border-2 flex-col items-center ">
                        <h1 className="w-full  text-start text-text text-5xl"></h1>
                        <h1> </h1>
                    </div>
                </div>
           </div>
           <div className="w-full   h-64  border-border border-opacity-50 border-2 flex flex-col justify-center items-center">
                <div className="w-[50%] h-[50%] flex flex-row justify-between items-center">
                    <a href="https://github.com/waelzahir/" target="_blank"rel="noopener noreferrer">
                        <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img className="w-[50px] h-[50px]" src={github} alt="github" />
                            <h1 className="md:text-xl text-border">Github</h1>
                        </div>
                    </a>
                    <a href="https://x.com/__OUAIL__" target="_blank"rel="noopener noreferrer">
                        <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img className=" w-[50px] h-[50px]" src={twitter} alt="twitter" />
                            <h1 className="md:text-xl text-border">Twitter / X</h1>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/waelzahir/" target="_blank"rel="noopener noreferrer">
                        <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img className="w-[50px] h-[50px]" src={linkedin} alt="linkedin" />
                            <h1 className="md:text-xl text-border">Linkedin</h1>
                        </div>
                    </a>
                </div>
               
           </div>
        </div>
    )
}

export default About
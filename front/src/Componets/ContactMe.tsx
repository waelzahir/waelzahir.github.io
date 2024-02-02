import Pepe from "../assets/pepe.png"
const ContactMe = () =>
{
    return (
        <div className=" flex flex-row  w-full md:h-full md:flex-col h-16  md:w-1/4">
            <div className="mt-3 w-full">
                <img className=" w-14" src={Pepe} alt="" ></img>
            </div>
                <button>Linkeding</button>
                <button>twitter</button>
                <button>github</button>
                <button></button>
        </div>
    )
}
export default ContactMe
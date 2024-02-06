const Navigation = ({navigate} : {navigate:any}) =>
{
    return (
        <div className="md:h-14 h-10 w-full  border-border border-opacity-[50%] border-solid border-[3px]  bg-black bg-opacity-[50%] flex flex-row text-text font-pixelify text:xl md:text-3xl">
            <div className="h-full w-full flex justify-center items-center ">
                <h1 onClick={() => navigate(0)} className="cursor-pointer hover:text-green-50">
                    About
                </h1>
            </div>
            <div className="h-full w-full flex justify-center items-center">
                <h1 onClick={() => navigate(1)} className="cursor-pointer hover:text-green-50">
                    Skills
                </h1>
            </div>
            <div className="h-full w-full flex justify-center items-center ">
                <h1 onClick={() => navigate((prev:number) => {
                    if (prev === 2)
                    {
                        setTimeout(() => navigate(2), 0);
                        return 0
                    }
                    else
                        return(2)
                })
               } className="cursor-pointer hover:text-green-50">
                    Projects
                </h1>
            </div>
            <div className="h-full w-full flex justify-center items-center">
                <h1  onClick={() => navigate(3)} className="cursor-pointer hover:text-green-50">
                    Contact
                </h1>
            </div>
           
        </div>
    )
}

export default Navigation
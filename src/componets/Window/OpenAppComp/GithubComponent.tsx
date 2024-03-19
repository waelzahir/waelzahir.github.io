import { GitProject } from "../../../types/gitProject"
import link from "../../../assets/link.svg"

export const GithubComponent = ({content} : {content :GitProject}) =>
{
    
    return(
        <div className="w-full h-full flex flex-row overflow-hidden   ">
           <div className=" h-full w-3/12 flex justify-center items-center ">
                <div className="w-5/6 h-5/6  flex flex-col ">
                    
                    <div className="w-full h-full flex flex-col items-center ">
                            <h1 className="w-[95%] my-4 font-egoist text-3xl">
                                #TOPICS
                            </h1>
                        <div className="flex flex-col gap-y-4 w-full h-full overflow-y-scroll">
                        {content.topics.map((topic: string) => 
                            <a className="w-full h-11 border-2 border-purple-800 flex justify-center items-center gap-x-2 hover:bg-purple-300 hover:opacity-90 cursor-pointer" href={`https://www.google.com/search?q=${topic}`} target="_blank"> 
                                <h1 className=" font-egoist font-bold">{topic}</h1>
                                <img className="w-4" src={link} alt="" />
                            </a>
                        )}
                        </div>

                    </div>
                </div>
           </div>
           <div className="flex-1 h-full flex-col overflow-y-scroll">
                    <div className="w-full h-32  flex flex-row items-center ">
                        <h1 className="text-3xl font-egoist w-[50%]">
                            #PROJECT NAME :
                        </h1>
                        <h1 className="text-xl font-bold">
                            {content.name}
                        </h1>
                    </div>
                    <div className="w-full h-32   flex flex-row items-center ">
                        <h1 className="text-3xl font-egoist w-[50%]">
                            #LINK:
                        </h1>
                        <a className="w-1/4 h-11 border-2 border-purple-800 flex justify-center items-center gap-x-2  hover:bg-purple-300 hover:opacity-90 cursor-pointer" href={content.html_url} target="_blank"> 
                                <h1 className=" font-egoist font-bold">#github</h1>
                                <img className="w-4" src={link} alt="" />
                        </a>
                    </div>
                    <div className="w-full h-32  flex flex-col items-center justify-center">
                        <h1 className="text-3xl font-egoist w-full">
                            #DESCRIPTION:
                        </h1>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <div className=" w-[90%] font-tahoma ">
                            {content.description}
                            
                        </div>

                    </div>

           </div>
        </div>
    )
}
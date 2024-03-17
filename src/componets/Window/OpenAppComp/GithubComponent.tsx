import { GitProject } from "../../../types/gitProject"
import link from "../../../assets/link.svg"

export const GithubComponent = ({content} : {content :GitProject}) =>
{
    
    return(
        <div className="w-full h-full flex flex-row overflow-hidden">
           <div className=" h-full w-3/12 flex justify-center items-center ">
                <div className="w-5/6 h-5/6  flex flex-col ">
                    
                    <div className="w-full h-full flex flex-col items-center ">
                            <h1 className="w-[95%] my-4 font-egoist text-3xl">
                                #TOPICS
                            </h1>
                        <div className="flex flex-col gap-y-4 w-full h-full overflow-y-scroll">
                        {content.topics.map((topic: string) => 
                            <a className="w-full h-11 border-2 border-purple-800 flex justify-center items-center gap-x-2" href={`https://www.google.com/search?q=${topic}`} target="_blank"> 
                                <h1 className=" font-egoist font-bold">{topic}</h1>
                                <img className="w-4" src={link} alt="" />
                            </a>
                        )}
                        </div>

                    </div>
                </div>
           </div>
           <div className="flex-1 h-full bg-white">

           </div>
        </div>
    )
}
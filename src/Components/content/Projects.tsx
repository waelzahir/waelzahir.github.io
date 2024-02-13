import Eye from "../../assets/Eye"

const Projects  = ({dark} : {dark: boolean} ) => 
{
    return (
        <div id="project" className="w-full h-screen ">
            <div className="pl-4 h-6 flex items-center gap-x-4  pt-16">
                <Eye  color={`${dark ? "#fcfcfc" : "#2D2D2D"}`}/>
                <h1 className="text-center font-egoist text-2xl">Projects</h1>
            </div>
        </div>
    )
}
export default Projects